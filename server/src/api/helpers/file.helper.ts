
export function fileWriteCb(err: any, successMsg: string) {
  if (err) {
    console.log(err);
  } else {
    console.log(successMsg);
  }
}


export function stringify(obj: string) {
  return JSON.stringify(obj, null, 4);
}
