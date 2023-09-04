import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  const { fill } = props
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill={fill} {...props}>
      <path
        fill={fill}
        d='M5 21c-.55 0-1.021-.196-1.413-.588A1.922 1.922 0 0 1 3 19V5c0-.55.196-1.021.588-1.413A1.922 1.922 0 0 1 5 3h6c.283 0 .521.096.713.288.192.192.288.43.287.712a.968.968 0 0 1-.288.713A.964.964 0 0 1 11 5H5v14h14v-6c0-.283.096-.521.288-.713A.964.964 0 0 1 20 12c.283 0 .521.096.713.288.192.192.288.43.287.712v6c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 19 21H5Zm4-6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7L17.6 5H15a.968.968 0 0 1-.713-.288A.964.964 0 0 1 14 4c0-.283.096-.521.288-.713A.964.964 0 0 1 15 3h5c.283 0 .521.096.713.288.192.192.288.43.287.712v5a.968.968 0 0 1-.288.713A.964.964 0 0 1 20 10a.968.968 0 0 1-.713-.288A.964.964 0 0 1 19 9V6.4l-8.625 8.625a.918.918 0 0 1-.675.275.96.96 0 0 1-.7-.3Z'
      />
    </svg>
  )
}
const Memo = memo(SvgComponent)
export default Memo
