import * as React from "react";
import { SVGProps, memo } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const { fill = "#4844C5" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={120}
      height={15}
      fill={fill}
      {...props}
    >
      <path
        fill={fill}
        d="M10.586 12h-2.04L7.54 9.148H3.133L2.164 12H.133L4.328.797h2.094L10.586 12Zm-3.54-4.367L5.493 3.164a5.292 5.292 0 0 1-.148-.703h-.032a4.574 4.574 0 0 1-.156.703L3.617 7.633h3.43ZM19.203 12h-1.812v-1.36h-.032c-.583 1.032-1.481 1.547-2.695 1.547-.984 0-1.773-.356-2.367-1.07-.589-.719-.883-1.695-.883-2.93 0-1.322.326-2.382.977-3.18.656-.796 1.528-1.194 2.617-1.194 1.078 0 1.862.432 2.351 1.296h.032V.156h1.812V12Zm-1.789-3.656V7.297c0-.568-.185-1.05-.555-1.445-.37-.396-.84-.594-1.414-.594-.677 0-1.21.252-1.601.758-.386.505-.578 1.205-.578 2.101 0 .813.184 1.456.554 1.93.375.469.878.703 1.508.703.62 0 1.123-.227 1.508-.68.385-.458.578-1.034.578-1.726ZM28.46 4l-3.093 8h-1.96L20.46 4h1.969l1.773 5.594c.136.411.219.77.25 1.078h.024c.046-.386.12-.735.218-1.047L26.555 4h1.906ZM35.57 12h-1.758v-1.25h-.03c-.553.958-1.363 1.438-2.43 1.438-.787 0-1.404-.214-1.852-.641-.443-.427-.664-.992-.664-1.695 0-1.51.87-2.391 2.61-2.641l2.374-.336c0-1.14-.541-1.71-1.625-1.71-.953 0-1.812.327-2.578.983V4.563c.844-.5 1.818-.75 2.922-.75 2.02 0 3.031.994 3.031 2.984V12Zm-1.75-3.93-1.68.235c-.52.067-.913.195-1.18.383-.26.182-.39.505-.39.968 0 .339.12.617.36.836.244.214.57.32.976.32.552 0 1.008-.192 1.367-.578.365-.39.547-.88.547-1.468V8.07ZM44.914 12h-1.812V7.492c0-1.495-.53-2.242-1.586-2.242-.552 0-1.008.208-1.368.625-.359.411-.539.932-.539 1.563V12h-1.82V4h1.82v1.328h.032c.599-1.01 1.463-1.516 2.593-1.516.87 0 1.534.284 1.993.852.458.563.687 1.378.687 2.445V12ZM52.86 11.633c-.641.37-1.4.555-2.274.555-1.188 0-2.146-.37-2.875-1.11-.73-.745-1.094-1.708-1.094-2.89 0-1.318.39-2.376 1.172-3.172.786-.802 1.836-1.204 3.148-1.204.73 0 1.373.128 1.93.383v1.688c-.557-.417-1.15-.625-1.781-.625-.766 0-1.393.26-1.883.781-.49.516-.734 1.193-.734 2.031 0 .828.229 1.482.687 1.961.464.48 1.084.719 1.86.719.65 0 1.265-.232 1.843-.695v1.578ZM61.438 8.492h-5.454c.021.74.248 1.31.68 1.711.438.401 1.036.602 1.797.602.854 0 1.638-.255 2.352-.766V11.5c-.73.458-1.693.688-2.891.688-1.177 0-2.102-.363-2.774-1.086-.666-.73-1-1.753-1-3.07 0-1.246.368-2.259 1.102-3.04.74-.786 1.656-1.18 2.75-1.18s1.94.352 2.54 1.055c.598.703.898 1.68.898 2.93v.695Zm-1.75-1.281c-.006-.651-.16-1.156-.461-1.516-.302-.364-.72-.547-1.25-.547-.521 0-.964.19-1.329.57-.359.381-.58.878-.664 1.493h3.703ZM70.438 12h-1.813v-1.36h-.031c-.584 1.032-1.482 1.547-2.696 1.547-.984 0-1.773-.356-2.367-1.07-.588-.719-.883-1.695-.883-2.93 0-1.322.326-2.382.977-3.18.656-.796 1.529-1.194 2.617-1.194 1.078 0 1.862.432 2.352 1.296h.031V.156h1.813V12Zm-1.79-3.656V7.297c0-.568-.184-1.05-.554-1.445-.37-.396-.841-.594-1.414-.594-.677 0-1.211.252-1.602.758-.385.505-.578 1.205-.578 2.101 0 .813.185 1.456.555 1.93.375.469.877.703 1.507.703.62 0 1.123-.227 1.508-.68.386-.458.578-1.034.578-1.726ZM83.46 2.375h-4.187v3.367h3.86v1.57h-3.86V12h-1.859V.797h6.047v1.578ZM86.172 2.32c-.297 0-.552-.096-.766-.289a.957.957 0 0 1-.312-.734c0-.297.104-.544.312-.742.214-.198.469-.297.766-.297.307 0 .568.099.781.297a.97.97 0 0 1 .32.742.968.968 0 0 1-.32.726 1.107 1.107 0 0 1-.781.297ZM87.07 12h-1.812V4h1.812v8ZM91.266 12h-1.82V.156h1.82V12ZM97.852 11.914c-.355.177-.82.266-1.399.266-1.552 0-2.328-.745-2.328-2.235V5.422h-1.336V4h1.336V2.148l1.813-.515V4h1.914v1.422h-1.915v4c0 .474.086.812.258 1.015.172.204.459.305.86.305.307 0 .573-.088.797-.265v1.437ZM106.094 8.492h-5.453c.02.74.247 1.31.679 1.711.438.401 1.037.602 1.797.602.854 0 1.638-.255 2.352-.766V11.5c-.729.458-1.693.688-2.891.688-1.177 0-2.101-.363-2.773-1.086-.667-.73-1-1.753-1-3.07 0-1.246.367-2.259 1.101-3.04.74-.786 1.656-1.18 2.75-1.18s1.94.352 2.539 1.055c.599.703.899 1.68.899 2.93v.695Zm-1.75-1.281c-.005-.651-.159-1.156-.461-1.516-.302-.364-.719-.547-1.25-.547-.521 0-.964.19-1.328.57-.36.381-.581.878-.664 1.493h3.703ZM112.461 5.727c-.219-.172-.534-.258-.945-.258-.537 0-.985.242-1.344.726-.36.485-.539 1.144-.539 1.977V12h-1.813V4h1.813v1.648h.031c.177-.562.448-1 .813-1.312.369-.318.781-.477 1.234-.477.328 0 .578.05.75.149v1.719ZM113.352 11.75v-1.68c.677.516 1.424.774 2.242.774 1.094 0 1.64-.323 1.64-.969a.744.744 0 0 0-.14-.46 1.309 1.309 0 0 0-.383-.345 2.824 2.824 0 0 0-.563-.265l-.718-.266a7.982 7.982 0 0 1-.891-.414 2.849 2.849 0 0 1-.656-.492 1.954 1.954 0 0 1-.391-.633 2.328 2.328 0 0 1-.133-.82c0-.386.092-.724.274-1.016.182-.297.427-.544.734-.742a3.386 3.386 0 0 1 1.047-.453 4.68 4.68 0 0 1 1.211-.156c.74 0 1.401.111 1.984.335v1.586c-.562-.385-1.208-.578-1.937-.578-.229 0-.438.024-.625.07a1.61 1.61 0 0 0-.469.196.95.95 0 0 0-.305.305.706.706 0 0 0-.109.382c0 .172.037.318.109.438.073.12.18.226.321.32.146.089.317.172.515.25.203.073.435.154.696.242.343.141.651.284.922.43.276.146.51.313.703.5a1.9 1.9 0 0 1 .445.64c.104.24.156.527.156.86 0 .406-.093.76-.281 1.063a2.356 2.356 0 0 1-.75.75 3.433 3.433 0 0 1-1.086.437 5.433 5.433 0 0 1-1.289.149c-.875 0-1.633-.146-2.273-.438ZM0 13.852h119.57v.93H0v-.93Z"
      />
    </svg>
  );
};
const Memo = memo(SvgComponent);
export default Memo;
