import { fromEvent, merge, EMPTY } from 'rxjs';
import {
  concatMap,
  catchError,
  elementAt,
  filter,
  first,
  map,
  takeUntil,
} from 'rxjs/operators';

const defaults = {
  element: window,
  horizontalMoveStarts: () => {},
  horizontalMoves: () => {},
  horizontalMoveEnds: () => {},
};

const PanGestureService = options => {
  const config = Object.assign(defaults, options);
  const element = config.element;
  const mouseEventToCoordinate = mouseEvent => {
    return {
      x: mouseEvent.clientX,
      y: mouseEvent.clientY,
      startedAt: Date.now(),
    };
  };

  const touchEventToCoordinate = touchEvent => {
    return {
      x: touchEvent.changedTouches[0].clientX,
      y: touchEvent.changedTouches[0].clientY,
      startedAt: Date.now(),
    };
  };

  const mouseDowns = fromEvent(element, 'mousedown').pipe(
    map(mouseEventToCoordinate),
  );
  const mouseMoves = fromEvent(window, 'mousemove').pipe(
    map(mouseEventToCoordinate),
  );
  const mouseUps = fromEvent(window, 'mouseup').pipe(
    map(mouseEventToCoordinate),
  );

  const touchStarts = fromEvent(element, 'touchstart').pipe(
    map(touchEventToCoordinate),
  );
  const touchMoves = fromEvent(element, 'touchmove').pipe(
    map(touchEventToCoordinate),
  );
  const touchEnds = fromEvent(window, 'touchend').pipe(
    map(touchEventToCoordinate),
  );

  const starts = merge(mouseDowns, touchStarts);
  const moves = merge(mouseMoves, touchMoves);
  const ends = merge(mouseUps, touchEnds);

  // Move starts with direction: Pair the move start events with the 3rd subsequent move event,
  // but only if no end event happens in between
  let moveStartsWithDirection = starts.pipe(
    concatMap(dragStartEvent =>
      moves.pipe(
        takeUntil(ends),
        elementAt(1),
        catchError(() => EMPTY),
        map(dragEvent => {
          const intialDeltaX = dragEvent.x - dragStartEvent.x;
          const initialDeltaY = dragEvent.y - dragStartEvent.y;
          return {
            x: dragStartEvent.x,
            y: dragStartEvent.y,
            intialDeltaX,
            initialDeltaY,
          };
        }),
      ),
    ),
  );

  // Vertical move starts: Keep only those move start events
  // where the 3rd subsequent move event is rather vertical than horizontal
  let verticalMoveStarts = moveStartsWithDirection.pipe(
    filter(
      dragStartEvent =>
        Math.abs(dragStartEvent.intialDeltaX) <
        Math.abs(dragStartEvent.initialDeltaY),
    ),
  );

  // Horizontal move starts: Keep only those move start events
  // where the 3rd subsequent move event is rather horizontal than vertical
  let horizontalMoveStarts = moveStartsWithDirection.pipe(
    filter(
      dragStartEvent =>
        Math.abs(dragStartEvent.intialDeltaX) >=
        Math.abs(dragStartEvent.initialDeltaY),
    ),
  );

  // Take the moves until an end occurs
  const movesUntilEnds = dragStartEvent =>
    moves.pipe(
      takeUntil(ends),
      map(dragEvent => {
        const x = dragEvent.x - dragStartEvent.x;
        const y = dragEvent.y - dragStartEvent.y;
        return { x, y };
      }),
    );

  let verticalMoves = verticalMoveStarts.pipe(concatMap(movesUntilEnds));
  let horizontalMoves = horizontalMoveStarts.pipe(concatMap(movesUntilEnds));

  const lastMovesAtEnds = dragStartEvent =>
    ends.pipe(
      first(),
      map(dragEndEvent => {
        const x = dragEndEvent.x - dragStartEvent.x;
        const y = dragEndEvent.y - dragStartEvent.y;
        return { x, y };
      }),
    );

  let verticalMoveEnds = verticalMoveStarts.pipe(concatMap(lastMovesAtEnds));
  let horizontalMoveEnds = horizontalMoveStarts.pipe(
    concatMap(lastMovesAtEnds),
  );

  horizontalMoveStarts.forEach(config.horizontalMoveStarts);
  horizontalMoves.forEach(config.horizontalMoves);
  horizontalMoveEnds.forEach(config.horizontalMoveEnds);

  return {
    verticalMoves,
    verticalMoveEnds,
    horizontalMoveStarts,
    horizontalMoves,
    horizontalMoveEnds,
  };
};

export default PanGestureService;
