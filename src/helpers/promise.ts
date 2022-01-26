export function FakePromise(
  delay = 400,
  force_error = false,
  error_options = {}
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (force_error) return reject(error_options);

      //@ts-ignore
      resolve();
    }, delay);
  });
}

export async function AwaitAndExecFunc(fn: any, ...args: any) {
  await FakePromise(7000);
  return fn(...args);
}
