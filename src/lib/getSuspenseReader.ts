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

  console.debug("typeof action", typeof action);
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
      theStatus = { status: "error", result: error };
    }
  );

  return () => {
    console.log("theStatus", theStatus.status);
    switch (theStatus.status) {
      case "pending":
        console.debug("pending");
        throw suspender;
      case "error":
        console.debug("error");
        throw theStatus.result;
      case "success":
        console.debug("success");
        return theStatus.result;
    }
  };
}
