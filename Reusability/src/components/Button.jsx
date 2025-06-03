import classnames from "classnames";

export default function Button({ children, className, variant, ...rest }) {
  /**
   * Challenge:
   *
   * Accept a `variant` prop and style the Button component
   * accordingly. The values can be `success`, `warning`, or `danger`.
   * Check the Figma design for the specific colors to be used for each
   * variant.
   */
  let variants;
  switch (variant) {
    case "success":
      variants = "success";
      break;
    case "warning":
      variants = "warning";
      break;
    case "danger":
      variants = "danger";
      break;
    default:
      variants = "default";
  }
  const allClasses = classnames(className, variants);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
