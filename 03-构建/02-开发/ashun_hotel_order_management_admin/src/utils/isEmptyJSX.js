import ASEmpty from "@/components/empty";

export const isEmptyJSX = (isEmpty, Content) => {
  if (isEmpty) {
    return <ASEmpty />;
  }
  return Content;
};
