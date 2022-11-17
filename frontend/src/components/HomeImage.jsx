import { useSize } from "../hooks";
export default function HomeImage({ visible, item, x }) {
  const [ref, { width }] = useSize();
  return (
    <img
      src={item.image}
      alt={item.alt}
      className={`w-32 h-52 rounded-sm absolute -top-1/2 -z-10 transition-["all 0.5 cubic-bezier(0.43, 0.13, 0.23, 0.96)"] pointer-events-none ${
        visible ? " opacity-50 -rotate-12 " : " opacity-0 rotate-0 "
      }`}
      ref={ref}
      style={{
        transform: `translateX(${x - width / 2}px)`,
      }}
    />
  );
}
