import { FC } from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: FC<SvgProps> = (props) => {
  return (
    <Svg viewBox='0 0 16 16' fill='none' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.6718 12.4149C15.545 11.0955 16.0074 9.5467 16.0004 7.96447C15.9958 6.91389 15.7843 5.87452 15.3779 4.90568C14.9716 3.93685 14.3784 3.05754 13.6323 2.31795C12.8861 1.57837 12.0016 0.992988 11.0292 0.595245C10.0568 0.197501 9.01563 -0.00481976 7.96505 -0.000165633C6.38282 0.00684373 4.8382 0.482879 3.52652 1.36774C2.21484 2.25261 1.195 3.50656 0.59598 4.97102C-0.00304357 6.43549 -0.154352 8.0447 0.161189 9.59517C0.476729 11.1456 1.24495 12.5677 2.3687 13.6816C3.49245 14.7954 4.92126 15.551 6.47445 15.8529C8.02764 16.1547 9.63545 15.9892 11.0946 15.3772C12.5537 14.7653 13.7986 13.7344 14.6718 12.4149ZM14.1731 12.0845C14.9802 10.8638 15.4072 9.43104 15.4 7.96759C15.39 6.00589 14.6015 4.12842 13.2078 2.74786C11.8141 1.3673 9.92922 0.596638 7.96751 0.605269C6.50405 0.611938 5.07545 1.05246 3.86237 1.87111C2.6493 2.68976 1.70625 3.84977 1.15249 5.20443C0.59874 6.55909 0.459158 8.04754 0.751403 9.48153C1.04365 10.9155 1.75459 12.2306 2.79431 13.2605C3.83404 14.2905 5.15584 14.9889 6.59253 15.2675C8.02923 15.5462 9.51629 15.3925 10.8656 14.8259C12.215 14.2593 13.366 13.3053 14.1731 12.0845Z'
        fill='#8990A5'
      />
      <path
        d='M8.02783 4.05284C8.40059 4.07951 9.74841 4.51661 10.0962 4.75545C9.80638 3.91487 8.83073 3.80298 8.02783 4.05284Z'
        fill='#8990A5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.1089 4.76281C10.6681 4.98372 11.2203 5.20188 11.7531 5.35609C14.5949 6.13003 14.308 7.68402 12.912 8.98278C12.7124 9.18862 12.505 9.38728 12.3193 9.56519L12.3193 9.56522C12.1851 9.69372 12.0623 9.8114 11.9618 9.91317C10.8986 10.9966 9.00352 13.1172 9.31135 15.2824L9.31131 15.2825L9.31367 15.2883C9.23926 15.3041 9.16527 15.3186 9.09169 15.3318C6.26579 15.9083 3.21267 14.291 1.91309 12.21C2.54765 10.7881 2.65116 9.53787 2.7867 7.90063L2.80648 7.66235C2.91742 6.06872 3.37169 4.74634 6.09106 3.99724C6.71657 3.84478 7.36816 3.89985 8.02787 4.05522C8.62555 3.91377 9.31715 3.90565 9.68527 4.22507C9.9386 4.44014 10.0638 4.61638 10.0963 4.75782L10.1089 4.76281ZM12.3338 7.77855C12.3676 7.72736 12.3854 7.66729 12.3851 7.60595C12.3845 7.52374 12.3513 7.44513 12.2928 7.38733C12.2344 7.32952 12.1554 7.29724 12.0732 7.29755C12.0119 7.29789 11.952 7.31642 11.9012 7.35078C11.8504 7.38515 11.8109 7.43381 11.7877 7.49061C11.7646 7.54741 11.7588 7.60981 11.7711 7.6699C11.7834 7.72999 11.8132 7.78509 11.8569 7.82822C11.9005 7.87135 11.9559 7.90058 12.0161 7.91221C12.0764 7.92384 12.1387 7.91735 12.1952 7.89356C12.2518 7.86977 12.3 7.82974 12.3338 7.77855ZM8.14188 6.97365C8.29899 6.7383 8.38279 6.46165 8.38268 6.17868L8.3821 6.1781C8.38179 5.79885 8.23092 5.43524 7.96264 5.16717C7.69436 4.89911 7.33063 4.74854 6.95138 4.74854C6.66841 4.74865 6.39182 4.83267 6.15661 4.98998C5.92139 5.14728 5.7381 5.37081 5.62992 5.63228C5.52174 5.89376 5.49352 6.18144 5.54884 6.45895C5.60416 6.73646 5.74052 6.99134 5.94069 7.19134C6.14086 7.39135 6.39585 7.52751 6.6734 7.58261C6.95096 7.6377 7.23862 7.60925 7.5 7.50085C7.76139 7.39246 7.98477 7.20899 8.14188 6.97365ZM7.78876 6.75051C7.89934 6.58501 7.95837 6.39044 7.95837 6.1914C7.95837 5.92449 7.85234 5.66852 7.66361 5.47978C7.47487 5.29105 7.2189 5.18502 6.95199 5.18502C6.75295 5.18502 6.55838 5.24405 6.39288 5.35463C6.22738 5.46521 6.09839 5.62238 6.02222 5.80628C5.94605 5.99017 5.92612 6.19252 5.96495 6.38773C6.00378 6.58295 6.09963 6.76227 6.24038 6.90301C6.38112 7.04376 6.56044 7.13961 6.75566 7.17844C6.95088 7.21727 7.15322 7.19734 7.33712 7.12117C7.52101 7.045 7.67818 6.91601 7.78876 6.75051ZM12.2744 9.07545C12.7103 8.86096 13.1387 8.61806 13.4987 8.28994L13.4831 8.27197C13.1063 8.57342 12.6686 8.78502 12.2263 8.96762C11.7842 9.15095 11.326 9.29263 10.8576 9.39081C10.3939 9.48238 9.92129 9.52127 9.44886 9.50675C8.98277 9.49342 8.51437 9.40067 8.10857 9.13748L8.09292 9.15545C8.42393 9.52994 8.93466 9.6998 9.43437 9.74501C9.93408 9.79023 10.4274 9.69806 10.9005 9.57574C11.373 9.45225 11.833 9.28475 12.2744 9.07545Z'
        fill='#8990A5'
      />
    </Svg>
  )
}

export default Icon
