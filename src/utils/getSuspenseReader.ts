type fnOrPromise<T> = (() => PromiseLike<T>) | PromiseLike<T>;
type SuspenseStatus<T> =
  | { status: "pending" }
  | { status: "success"; result: T }
  | { status: "error"; result: Error };

/**
 * Wrap `action` into a suspense contract.
 *
 * @param {fnOrPromise} action
 */
export default function getSuspenseReader<T = unknown>(action: fnOrPromise<T>) {
  let thePromise: PromiseLike<T>;
  let theStatus: SuspenseStatus<T> = { status: "pending" };

  if (typeof action === "function") {
    thePromise = action();
  } else {
    thePromise = action;
  }

  let suspender = thePromise.then(
    (result) => {
      console.log("received", result);
      theStatus = { status: "success", result };
    },
    (error) => {
      console.log("error", error);
      theStatus = { status: "error", result: result };
    }
  );

  return () => {
    switch (theStatus.status) {
      case "pending":
        throw suspender;
      case "error":
        throw theStatus.result;
      case "success":
        return theStatus.result;
    }
  };
}
