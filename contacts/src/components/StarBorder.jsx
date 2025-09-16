// src/components/StarBorder.jsx
/* Neon kenarlı, animasyonlu çerçeve */
export default function StarBorder({
  as: Component = "a",
  className = "",
  color = "#FF5E2E", // neon rengi
  speed = "6s",
  thickness = 2,
  children,
  style,
  ...rest
}) {
  return (
    <Component
      className={`star-wrap ${className}`}
      style={{
        "--star-color": color,
        "--star-speed": speed,
        "--star-thickness": `${thickness}px`,
        ...style,
      }}
      {...rest}
    >
      <div className="star-bottom" />
      <div className="star-top" />
      <div className="star-inner">{children}</div>
    </Component>
  );
}
