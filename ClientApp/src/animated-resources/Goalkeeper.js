import './animations.css';
import { useState } from 'react';

export const Goalkeeper = () => {

    function shoot(buton){
        if(buton.target.className === 'buton1'){
            document.getElementById('ball').classList.add('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');

        }if(buton.target.className === 'buton2'){
            document.getElementById('ball').classList.add('leftMiddle');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton3'){
            document.getElementById('ball').classList.add('leftBottom');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('leftBottom');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton4'){
            document.getElementById('ball').classList.add('centerTop');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('centerTop');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton5'){
            document.getElementById('ball').classList.add('centerMiddle');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton6'){
            document.getElementById('ball').classList.add('centerBottom');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('centerBottom');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton7'){
            document.getElementById('ball').classList.add('rightTop');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightMiddle');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('rightTop');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton8'){
            document.getElementById('ball').classList.add('rightMiddle');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightBottom');

            document.getElementById('standing-keeper').classList.add('rightMiddle');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightBottom');
        }if(buton.target.className === 'buton9'){
            document.getElementById('ball').classList.add('rightBottom');
            document.getElementById('ball').classList.remove('leftTop');
            document.getElementById('ball').classList.remove('leftMiddle');
            document.getElementById('ball').classList.remove('leftBottom');
            document.getElementById('ball').classList.remove('centerTop');
            document.getElementById('ball').classList.remove('centerMiddle');
            document.getElementById('ball').classList.remove('centerBottom');
            document.getElementById('ball').classList.remove('rightTop');
            document.getElementById('ball').classList.remove('rightMiddle');

            document.getElementById('standing-keeper').classList.add('rightBottom');
            document.getElementById('standing-keeper').classList.remove('leftTop');
            document.getElementById('standing-keeper').classList.remove('leftMiddle');
            document.getElementById('standing-keeper').classList.remove('leftBottom');
            document.getElementById('standing-keeper').classList.remove('centerTop');
            document.getElementById('standing-keeper').classList.remove('centerMiddle');
            document.getElementById('standing-keeper').classList.remove('centerBottom');
            document.getElementById('standing-keeper').classList.remove('rightTop');
            document.getElementById('standing-keeper').classList.remove('rightMiddle');
        }
    }
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', marginBottom: '170px'}}>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <button className='buton1' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                    <button className='buton2' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                    <button className='buton3' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                </div>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <button className='buton4' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                    <button className='buton5' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                    <button className='buton6' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                </div>
                <div style={{display: 'grid', justifyContent: 'center'}}>
                    <button className='buton7' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                    <button className='buton8' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                    <button className='buton9' style={{width: '220px', height: '95px', background: 'transparent', border: 'none'}} onClick={(e) => shoot(e)}></button>
                </div>
        </div>
        
        <svg width="700" height="550" viewBox="0 0 2998 2047" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="goalkeepers">
            <g id="undraw_goal_-0-v5v 1">
            <g id="goal">
            <path id="Vector" d="M2839.1 29.7381V1183.41L2766.86 1144.76V29.7381H2723.52L2705.46 1106.1L2636.83 1064.47L2683.78 14.8708" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_2" d="M2929.44 112.995L2636.86 126.375" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_3" d="M2911.38 172.464L2636.86 181.385" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_4" d="M2911.38 243.828L2636.86 249.774" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_5" d="M2911.38 309.243L2636.86 318.164" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_6" d="M2911.38 383.58H2626.03" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_7" d="M2911.38 457.916L2618.8 448.996" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_8" d="M2911.38 526.306L2618.8 514.413" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_9" d="M2911.38 600.643L2618.8 582.802" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_10" d="M2918.61 666.059L2607.97 642.272" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_11" d="M2918.61 740.396L2607.97 701.741" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_12" d="M2918.61 826.626L2597.13 779.051" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_13" d="M2918.61 924.75L2597.13 847.44" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_14" d="M2925.83 1025.85L2586.29 915.83" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_15" d="M2925.83 1118.03L2586.29 981.246" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_16" d="M2557.36 26.7646L2499.57 1040.69H2423.71L2470.67 26.7646H2387.59L2333.41 1040.69H2250.33L2297.29 26.7646H2196.15L2160.03 1040.69H2069.73L2109.46 35.685H2015.55L1993.87 1040.69H1910.8L1936.08 26.7646H1853L1834.94 1040.69H1755.48L1773.54 26.7646H1679.62V1040.69H1585.71V26.7646H1499.02L1513.47 1040.69H1437.61L1415.94 26.7646H1329.25L1358.15 1040.69H1282.29L1246.17 26.7646H1170.32L1199.21 1040.69H1130.58L1076.4 26.7646H1004.16L1061.96 1040.69H989.713L910.247 26.7646H823.557L924.696 1040.69H856.066L758.539 26.7646H689.91L791.048 1040.69H715.194L617.668 14.8708H549.038L661.013 1040.69H588.771L473.184 14.8708" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_17" d="M310.64 29.7381L419.002 1058.53L364.821 1094.21L281.743 29.7381H223.949L281.743 1132.86L198.665 1177.47L166.192 14.8708" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_18" d="M86.7264 145.703H419.039" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_19" d="M86.7264 220.04H419.039" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_20" d="M86.7264 303.297L419.039 294.376" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_21" d="M86.7264 374.66L433.487 359.792" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_22" d="M86.7264 454.943L433.487 443.049" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_23" d="M86.7264 541.173L447.936 526.306" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_24" d="M86.7264 624.431L447.936 594.696" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_25" d="M86.7264 719.582L447.936 648.218" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_26" d="M86.7264 802.838L462.384 698.767" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_27" d="M86.7264 889.069L462.384 770.13" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_28" d="M75.8898 972.326L449.85 843.129" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_29" d="M75.8898 1067.48L462.384 906.91" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_30" d="M75.8898 1153.71L473.22 972.326" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_31" d="M2636.86 112.995L419.039 127.862" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_32" d="M2635.06 166.517L417.233 181.384" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_33" d="M2633.25 220.04L415.427 234.907" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_34" d="M2631.45 273.562L413.621 288.429" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_35" d="M2629.64 327.085L411.815 341.952" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_36" d="M2627.83 380.607L438.905 395.474" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_37" d="M2626.03 434.129L437.099 448.996" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_38" d="M2624.22 487.651L435.293 502.518" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_39" d="M2622.42 541.174L433.488 556.041" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_40" d="M2620.61 594.696L453.353 609.564" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_41" d="M2618.8 648.218L451.547 663.086" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_42" d="M2617 701.741L449.741 716.608" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_43" d="M2615.19 755.263L462.384 770.13" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_44" d="M2613.38 808.786L460.578 823.653" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_45" d="M2611.58 862.308L469.608 877.175" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_46" d="M2609.77 915.83L467.802 930.697" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_47" d="M2607.97 969.353L465.996 984.22" stroke="#E0E0E0" stroke-miterlimit="10"/>
            <path id="Vector_48" d="M2925.79 1233.96L2597.09 1040.69H462.348L86.7264 1233.96" stroke="#E0E0E0" stroke-width="3" stroke-miterlimit="10"/>
            <path id="Vector_49" d="M34.3149 121.41C36.0848 63.8732 84.4868 13.3243 152.791 0.984403L154.742 0.65732C157.502 0.204461 160.308 -0.0146867 163.122 0.00315406H2866.41C2886.39 -0.130652 2906.04 3.99502 2923.48 11.9782C2940.97 19.9616 2955.59 31.5299 2966 45.5566L2966.68 46.5379C2970.66 52.2775 2972.79 58.754 2972.9 65.3599L2998 1233.93H2911.31L2882.41 92.1211C2882.41 92.1211 2882.41 59.413 2846.29 56.4395C2840.77 55.9935 2773.73 55.6664 2664.21 55.4583L2600.71 1043.66H2564.59L2635.2 55.4285C2153.71 54.6554 975.193 55.6367 428.214 56.1719L498.36 1037.71H462.239L399.245 56.2016L191.044 56.4098C175.775 56.4178 160.778 59.7157 147.54 65.9757C134.301 72.2354 123.288 81.2394 115.587 92.0913L86.6902 1233.9H0L34.3149 121.41Z" fill="#CECECE"/>
            </g>
            </g>
            <g id="standing-keeper">
            <g id="right-leg">
            <path id="Vector_50" d="M1656.59 1104.16C1660.06 1109.78 1665.1 1112.68 1668.92 1117.77C1671.66 1121.42 1673.72 1126.19 1674.82 1131.41C1674.9 1131.81 1674.98 1132.24 1674.87 1132.63C1674.77 1132.98 1674.54 1133.2 1674.32 1133.38C1673.01 1134.4 1671.48 1134.48 1670 1134.55C1660.58 1134.94 1651.16 1135.07 1641.73 1134.96C1638.53 1134.92 1635.29 1134.85 1632.21 1133.52C1631.84 1133.36 1631.45 1133.16 1631.2 1132.71C1630.85 1132.08 1630.89 1131.16 1630.95 1130.34C1631.75 1119.66 1632.3 1108.59 1630.01 1098.39C1629.43 1095.81 1628.83 1092.43 1630.3 1090.82C1632.56 1088.36 1637.1 1089.01 1639.79 1088.46C1641.64 1088.09 1643.61 1087.3 1645.48 1087.79C1650.92 1089.23 1653.27 1098.77 1656.59 1104.16Z" fill="black"/>
            <path id="Vector_51" d="M1585.35 914.708C1589.23 922.83 1594.43 929.743 1596.94 938.982C1598.05 943.122 1598.58 947.538 1599.13 951.915C1599.36 953.767 1599.6 955.607 1599.85 957.448C1605.64 1001.17 1614.65 1043.94 1626.7 1084.73C1627.95 1088.98 1629.52 1093.62 1632.44 1095.23C1633.79 1095.98 1635.25 1095.97 1636.69 1095.78C1640.26 1095.33 1643.77 1093.75 1646.91 1091.2C1640.56 1044.31 1633.52 997.611 1625.79 951.179C1624.71 944.699 1623.61 938.221 1622.51 931.754C1621.38 925.104 1620.21 918.402 1618.09 912.316C1615.52 904.956 1611.65 898.805 1607.84 892.747L1601.14 889.436C1596.27 889.186 1591.35 890.881 1587.06 894.286C1585.61 895.442 1584.18 896.848 1583.33 898.925C1581.34 903.774 1583.14 910.068 1585.35 914.708Z" fill="#F89785"/>
            <path id="Vector_52" d="M1599.85 957.447C1605.64 1001.17 1614.65 1043.94 1626.7 1084.73C1627.95 1088.98 1629.52 1093.61 1632.44 1095.23C1633.79 1095.98 1635.25 1095.97 1636.69 1095.78C1640.26 1095.32 1643.77 1093.75 1646.91 1091.2C1640.56 1044.31 1633.52 997.61 1625.79 951.178C1624.69 951.112 1623.51 951.204 1622.24 951.454C1614.77 952.912 1607.46 955.987 1599.97 957.42C1599.93 957.434 1599.89 957.434 1599.85 957.447Z" fill="#FBB569"/>
            <path id="Vector_53" d="M1629.36 958.47C1629.4 959.038 1629.43 959.649 1629.23 960.136C1629.01 960.653 1628.6 960.897 1628.22 961.103C1619.95 965.552 1611.19 967.974 1602.4 968.242C1601.86 968.258 1601.31 968.26 1600.82 967.94C1599.76 967.246 1599.37 965.35 1599.1 963.678C1598.53 960.142 1597.95 956.607 1597.38 953.071C1597.14 951.543 1596.93 949.735 1597.64 948.565C1598.1 947.795 1598.84 947.547 1599.52 947.339C1607.76 944.833 1616 942.326 1624.24 939.819C1627.1 938.949 1627.28 943.571 1627.9 946.857C1628.62 950.655 1629.11 954.545 1629.36 958.47Z" fill="#FFD393"/>
            <path id="Vector_54" d="M1643.39 1100.04C1643.13 1099.68 1643.05 1099.03 1643.39 1098.14C1643.73 1097.28 1644.5 1096.16 1645.86 1095.47C1647.22 1094.81 1648.29 1095.01 1648.9 1095.41C1649.53 1095.81 1649.74 1096.4 1649.68 1096.92C1649.61 1097.47 1649.31 1097.87 1648.82 1098.19C1648.33 1098.52 1647.63 1098.76 1646.69 1099.21C1645.76 1099.69 1645.11 1100.12 1644.58 1100.3C1644.06 1100.48 1643.66 1100.43 1643.39 1100.04Z" fill="white"/>
            <path id="Vector_55" d="M1645.84 1104.5C1645.6 1104.1 1645.56 1103.45 1645.92 1102.61C1646.27 1101.78 1647.05 1100.74 1648.37 1100.08C1649.7 1099.45 1650.74 1099.6 1651.36 1099.95C1651.98 1100.32 1652.21 1100.88 1652.17 1101.41C1652.13 1101.96 1651.84 1102.39 1651.35 1102.74C1650.86 1103.1 1650.16 1103.37 1649.2 1103.83C1648.25 1104.31 1647.57 1104.71 1647.03 1104.85C1646.5 1105 1646.1 1104.9 1645.84 1104.5Z" fill="white"/>
            <path id="Vector_56" d="M1648.57 1110.41C1648.35 1109.99 1648.42 1109.24 1649.01 1108.28C1649.59 1107.33 1650.73 1106.16 1652.53 1105.52C1654.35 1104.91 1655.71 1105.21 1656.52 1105.68C1657.33 1106.15 1657.62 1106.79 1657.55 1107.3C1657.47 1107.85 1657.07 1108.2 1656.35 1108.45C1655.62 1108.72 1654.57 1108.88 1653.14 1109.36C1651.71 1109.87 1650.72 1110.42 1649.99 1110.65C1649.26 1110.9 1648.8 1110.85 1648.57 1110.41Z" fill="white"/>
            </g>
            <g id="right-arm">
            <path id="Vector_57" d="M1554.93 501.523C1556.86 523.457 1560.61 545.262 1567.6 564.804C1574.58 584.333 1584.96 601.563 1598.13 611.866C1604.17 616.598 1611.16 618.438 1616.98 623.76C1623.32 629.556 1629.48 635.431 1635.56 641.24C1659.06 663.647 1681.31 685.004 1707.47 696.832C1719.37 702.22 1731.94 704.35 1744.35 703.1C1761.29 701.38 1778.57 692.679 1790.09 674.134C1801.61 655.604 1805.87 626.02 1797.23 604.296C1793.42 594.702 1787.54 587.316 1781.36 581.007C1776.11 575.646 1770.47 570.875 1764.28 568.667C1749.86 563.554 1737.1 566.328 1724.79 578.629C1714.03 561.912 1702.36 547.547 1689.96 534.668C1677.45 521.658 1664.21 510.131 1650.44 499.196C1640.89 491.613 1631.08 484.74 1621.13 478.392C1612.45 472.859 1603.66 467.707 1594.8 462.819C1586.67 458.311 1577.07 450.649 1568.44 449.098C1553.28 446.351 1553.75 488.026 1554.93 501.523Z" fill="#F89785"/>
            <path id="Vector_58" d="M1749.13 646.276C1737.66 632.139 1733.04 614.911 1734.7 592.902C1734.88 590.577 1735.17 588.221 1734.9 585.917C1734.48 582.445 1732.87 579.611 1731.56 576.673C1729.07 571.085 1727.53 564.572 1727.12 557.896C1727 556.016 1726.99 554.011 1727.62 552.378C1728.36 550.49 1729.84 549.474 1731.3 549.215C1737.72 548.075 1745.64 563.228 1752.03 561.776C1753.26 561.497 1756.29 554.515 1758.71 550.235C1766.92 535.717 1773.53 517.287 1782.78 517.48C1784.73 517.521 1787.72 516.39 1790.06 520.857C1790.77 522.199 1790.27 527.665 1790.06 529.339C1789.24 536.153 1787.02 543.38 1785.22 550.262C1784.8 551.848 1785.83 553.443 1786.91 552.907C1791.54 550.619 1796.44 547.621 1800.53 544.226C1809.21 537.015 1822.49 536.878 1827.1 541.593C1828.12 542.642 1830.06 547.206 1829.87 549.034C1829.73 550.29 1829.04 551.228 1828.39 552.04C1825.28 555.881 1810.6 569.117 1807.1 572.121C1816.37 572.301 1825.58 576.414 1833.38 583.868C1833.99 584.457 1834.52 585.28 1834.79 586.291C1835.82 590.133 1832.85 592.648 1830.46 593.798C1825.93 595.981 1821.39 598.165 1816.86 600.349C1821.38 603.25 1825.6 607.146 1829.36 611.87C1831.46 614.513 1833.59 618.059 1832.7 622.329C1832.16 624.877 1830.69 626.701 1828.98 627.502C1824.99 629.366 1821.12 626.584 1817.2 626.034C1816.15 625.886 1815.07 626.37 1814.32 627.484C1813.1 629.313 1812.72 631.883 1811.94 634.105C1810.98 636.854 1809.98 639.58 1808.9 642.232C1806.8 647.36 1804.4 652.249 1801.44 656.354C1797.98 661.153 1793.64 664.832 1788.95 666.066C1783.66 667.46 1778.16 665.314 1772.96 663.963C1764.64 661.803 1759.08 658.548 1749.13 646.276Z" fill="white"/>
            <path id="Vector_59" d="M1711.26 653.99C1710.97 654.182 1709.67 651.624 1708.3 645.141C1707.63 641.905 1706.99 637.667 1706.75 632.371C1706.52 627.091 1706.67 620.717 1707.85 613.56C1709.04 606.405 1710.9 600.657 1712.75 596.137C1714.62 591.614 1716.5 588.298 1718.1 585.895C1721.34 581.1 1723.3 579.734 1723.49 580.1C1723.76 580.576 1722.25 582.697 1719.51 587.748C1718.14 590.281 1716.51 593.603 1714.85 597.975C1713.22 602.348 1711.54 607.791 1710.42 614.502C1709.32 621.214 1709.1 627.193 1709.19 632.196C1709.29 637.211 1709.7 641.282 1710.12 644.465C1710.97 650.834 1711.64 653.754 1711.26 653.99Z" fill="#E4746A"/>
            <path id="Vector_60" d="M1802.3 624.931C1802.11 624.927 1801.99 624.117 1801.72 622.543C1801.44 620.977 1800.98 618.624 1799.87 615.735C1799.32 614.295 1798.6 612.728 1797.68 611.098C1796.77 609.469 1795.64 607.798 1794.28 606.078C1792.93 604.36 1791.36 602.608 1789.62 600.716C1787.87 598.826 1785.95 596.762 1783.98 594.305C1782.02 591.856 1780.3 589.404 1778.8 586.998C1777.31 584.592 1776.01 582.27 1774.92 580.042C1773.84 577.809 1772.91 575.717 1772.17 573.755C1771.78 572.782 1771.44 571.849 1771.14 570.947C1770.83 570.058 1770.55 569.209 1770.32 568.397C1769.34 565.18 1768.83 562.706 1768.53 561.071C1768.27 559.423 1768.18 558.62 1768.27 558.581C1768.36 558.542 1768.61 559.272 1769.04 560.816C1769.49 562.345 1770.14 564.683 1771.25 567.712C1771.52 568.477 1771.82 569.276 1772.17 570.112C1772.49 570.96 1772.86 571.836 1773.27 572.751C1774.06 574.595 1775.03 576.559 1776.14 578.654C1777.26 580.747 1778.57 582.925 1780.07 585.187C1781.57 587.449 1783.28 589.757 1785.22 592.07C1787.15 594.385 1789.05 596.355 1790.82 598.24C1792.59 600.124 1794.22 601.937 1795.63 603.771C1797.04 605.601 1798.24 607.46 1799.19 609.293C1800.15 611.125 1800.86 612.913 1801.39 614.566C1802.45 617.888 1802.7 620.623 1802.7 622.366C1802.68 624.127 1802.46 624.938 1802.3 624.931Z" fill="#1C1C3C"/>
            <path id="Vector_61" d="M1758.3 636.113C1758.25 636.368 1757.87 636.467 1757.09 636.366C1756.71 636.295 1756.23 636.163 1755.65 635.945C1755.08 635.709 1754.42 635.391 1753.68 634.926C1752.94 634.464 1752.12 633.854 1751.23 633.085C1750.36 632.286 1749.41 631.351 1748.44 630.164C1746.51 627.808 1744.43 624.595 1742.57 620.273C1740.73 615.957 1739.62 611.895 1738.84 608.439C1738.07 604.968 1737.64 602.069 1737.36 599.779C1736.83 595.187 1736.84 593.028 1737 592.991C1737.19 592.941 1737.52 595.029 1738.38 599.423C1738.81 601.616 1739.39 604.38 1740.28 607.651C1741.18 610.91 1742.37 614.701 1744.2 618.679C1746.02 622.646 1747.98 625.585 1749.75 627.816C1750.63 628.938 1751.49 629.845 1752.27 630.655C1753.06 631.435 1753.78 632.094 1754.43 632.641C1755.08 633.191 1755.66 633.629 1756.15 634.015C1756.64 634.384 1757.06 634.695 1757.38 634.967C1758.04 635.47 1758.34 635.857 1758.3 636.113Z" fill="#1C1C3C"/>
            </g>
            <g id="left-leg">
            <path id="Vector_62" d="M1342.33 1114.13C1338.87 1119.76 1333.83 1122.65 1330.01 1127.74C1327.27 1131.39 1325.21 1136.16 1324.11 1141.38C1324.02 1141.78 1323.95 1142.22 1324.05 1142.6C1324.15 1142.95 1324.38 1143.18 1324.61 1143.35C1325.91 1144.37 1327.45 1144.46 1328.92 1144.52C1338.34 1144.91 1347.77 1145.05 1357.19 1144.94C1360.39 1144.9 1363.64 1144.82 1366.71 1143.49C1367.09 1143.33 1367.48 1143.13 1367.73 1142.69C1368.08 1142.05 1368.03 1141.13 1367.97 1140.31C1367.17 1129.63 1366.62 1118.56 1368.91 1108.37C1369.49 1105.79 1370.1 1102.4 1368.62 1100.79C1366.37 1098.33 1361.83 1098.98 1359.14 1098.43C1357.29 1098.06 1355.31 1097.27 1353.44 1097.77C1348.01 1099.2 1345.65 1108.75 1342.33 1114.13Z" fill="black"/>
            <path id="Vector_63" d="M1413.57 924.681C1409.69 932.803 1404.5 939.716 1401.99 948.955C1400.87 953.094 1400.34 957.511 1399.79 961.887C1399.56 963.74 1399.33 965.58 1399.08 967.42C1393.29 1011.14 1384.27 1053.91 1372.23 1094.7C1370.97 1098.95 1369.41 1103.59 1366.48 1105.21C1365.14 1105.96 1363.67 1105.94 1362.24 1105.76C1358.67 1105.3 1355.16 1103.72 1352.01 1101.17C1358.37 1054.28 1365.4 1007.58 1373.14 961.152C1374.22 954.672 1375.31 948.194 1376.42 941.727C1377.55 935.077 1378.71 928.374 1380.84 922.289C1383.41 914.929 1387.28 908.778 1391.09 902.72L1397.79 899.408C1402.66 899.159 1407.57 900.854 1411.87 904.258C1413.32 905.415 1414.74 906.821 1415.6 908.898C1417.59 913.747 1415.78 920.041 1413.57 924.681Z" fill="#F89785"/>
            <path id="Vector_64" d="M1399.08 967.42C1393.29 1011.14 1384.27 1053.91 1372.23 1094.7C1370.97 1098.95 1369.41 1103.59 1366.48 1105.2C1365.14 1105.95 1363.67 1105.94 1362.24 1105.76C1358.67 1105.3 1355.16 1103.72 1352.01 1101.17C1358.37 1054.28 1365.4 1007.58 1373.14 961.151C1374.23 961.085 1375.42 961.177 1376.68 961.427C1384.15 962.885 1391.46 965.96 1398.96 967.393C1399 967.406 1399.03 967.406 1399.08 967.42Z" fill="#FBB569"/>
            <path id="Vector_80" d="M1357.92 1112.72C1357.65 1113.8 1355.99 1113.58 1352.39 1112.57C1348.77 1111.7 1347.17 1111.07 1347.16 1109.92C1347.16 1109.38 1347.57 1108.87 1348.5 1108.57C1349.43 1108.27 1350.87 1108.18 1352.85 1108.69C1354.82 1109.21 1356.16 1110.03 1356.96 1110.77C1357.77 1111.52 1358.04 1112.21 1357.92 1112.72Z" fill="white"/>
            <path id="Vector_81" d="M1351.45 1117.27C1351.11 1118.3 1350 1118.24 1347.74 1117.67C1345.48 1117.22 1344.4 1116.79 1344.29 1115.66C1344.24 1115.12 1344.48 1114.56 1345.1 1114.14C1345.72 1113.73 1346.74 1113.47 1348.14 1113.78C1349.54 1114.1 1350.46 1114.81 1350.97 1115.47C1351.49 1116.14 1351.6 1116.78 1351.45 1117.27Z" fill="white"/>
            <path id="Vector_82" d="M1349.86 1121.97C1349.7 1123.07 1348.25 1123.41 1345.08 1122.93C1341.91 1122.52 1340.53 1121.79 1340.51 1120.67C1340.5 1119.61 1341.95 1118.57 1345.33 1119C1348.71 1119.52 1350 1120.94 1349.86 1121.97Z" fill="white"/>
            </g>
            <g id="torso-head">
            <path id="Vector_83" d="M1689.96 534.668C1690 554.749 1685.47 574.923 1677.85 591.641C1667.74 613.811 1652.59 630.226 1636.07 640.911C1635.91 641.017 1635.73 641.134 1635.56 641.24C1632.26 638.086 1628.94 634.918 1625.57 631.751C1622.8 629.122 1619.99 626.507 1617.14 623.917C1617.09 623.851 1617.04 623.812 1616.98 623.759C1611.17 618.437 1604.18 616.597 1598.14 611.865C1584.97 601.562 1574.58 584.331 1567.6 564.803C1560.62 545.26 1556.86 523.457 1554.94 501.522C1553.75 488.025 1553.28 446.351 1568.44 449.097C1577.08 450.648 1586.67 458.31 1594.81 462.818C1603.66 467.707 1612.46 472.859 1621.14 478.391C1631.09 484.739 1640.89 491.613 1650.45 499.196C1658.58 505.649 1666.51 512.312 1674.23 519.356C1677.47 522.313 1680.65 525.322 1683.79 528.437C1685.87 530.476 1687.93 532.552 1689.96 534.668Z" fill="#FBB569"/>
            <path id="Vector_84" d="M1683.79 528.439C1683.71 531.724 1683.48 534.472 1683.31 535.72C1680.45 556.104 1673.13 574.74 1663.69 590.103C1654.24 605.467 1642.7 617.728 1630.59 628.177C1628.99 629.544 1627.32 630.924 1625.57 631.751C1622.8 629.123 1619.99 626.508 1617.14 623.918C1621.52 619.503 1637.68 604.862 1639.53 602.509C1652.34 586.238 1662.62 565.539 1669.24 542.501C1670.93 536.601 1672.39 530.542 1673.59 524.378C1673.82 523.13 1674 521.303 1674.23 519.358C1677.47 522.315 1680.65 525.324 1683.79 528.439Z" fill="#FFD393"/>
            <path id="Vector_85" d="M1628.08 892.31C1627.4 898.146 1623.51 901.72 1619.96 904.388C1601.8 917.991 1582.28 927.558 1562.24 932.671C1558.65 933.59 1554.92 934.353 1551.41 932.934C1548.46 931.738 1546.04 929.201 1543.82 926.086C1540.97 922.131 1538.48 917.229 1535.66 913.049C1535.11 912.222 1534.54 911.42 1533.95 910.658C1523.81 897.595 1509.03 897.423 1495.62 897.936C1487.03 898.264 1478.14 898.711 1470.42 904.297C1466.42 907.176 1462.94 911.316 1459.51 915.587C1456.82 918.924 1454.17 922.355 1451.34 925.325C1449.15 927.626 1446.86 929.649 1444.37 931.148C1436.48 936.221 1426.83 930.03 1419.21 926.509C1410.23 922.342 1401.33 917.782 1392.53 912.827C1386.21 909.265 1368.7 902.839 1370.12 888.58C1370.24 887.305 1370.48 886.083 1370.8 884.9C1371.49 882.337 1372.54 879.932 1373.57 877.606C1374.63 875.213 1375.7 872.809 1376.76 870.417C1385.45 850.822 1394.14 831.239 1402.84 811.644C1405.64 805.323 1408.25 796.084 1412.47 791.484C1418.03 785.438 1426.81 784.848 1433.37 783.559C1449.91 780.313 1466.48 777.054 1483.16 776.226C1509.33 774.912 1535.45 779.564 1561.44 784.203C1564.33 784.716 1567.29 785.268 1569.83 787.318C1571.83 788.935 1573.46 791.393 1575.05 793.811C1591.65 818.979 1608.34 844.304 1622.13 872.941C1623.07 874.886 1624 876.858 1624.91 878.829C1625.72 880.617 1626.54 882.509 1627.16 884.48C1627.94 886.975 1628.39 889.616 1628.08 892.31Z" fill="black"/>
            <path id="Vector_86" d="M1467.44 423.794C1443.54 429.747 1415.12 440.478 1391.26 455.205C1377.8 463.514 1364.56 473.912 1354.62 489.763C1342.42 509.23 1336.07 535.984 1335.68 562.592C1335.28 589.199 1340.55 615.599 1349.16 638.935C1357.66 661.986 1369.29 682.16 1378.36 704.721C1387.33 727.007 1393.69 751.344 1401.15 774.819C1402.43 778.85 1403.8 782.959 1406.01 785.966C1408.44 789.262 1411.65 790.917 1414.76 792.489C1447.99 809.279 1483.46 826.258 1517.54 813.819C1533.86 807.861 1549.01 795.338 1565.64 791.691C1569.55 790.833 1573.87 790.236 1576.64 786.043C1578.51 783.224 1579.31 779.265 1580.1 775.486C1587.34 740.627 1597.98 707.476 1610.3 675.925C1614.29 665.708 1618.48 655.583 1621.36 644.57C1626.5 624.886 1627.2 603.356 1627.85 582.261C1628.86 549.185 1629.32 513.231 1616.18 486.492C1606.25 466.26 1591.76 458.027 1575.87 449.691C1538.49 430.08 1506.95 419.034 1467.44 423.794Z" fill="#FBB569"/>
            <path id="Vector_87" d="M1463.43 474.556C1462.91 468.908 1463.15 463.048 1464.12 457.589C1439.18 461.786 1414.91 473.876 1390.8 485.912C1386.23 488.192 1381.51 490.612 1377.9 496.034C1376.75 497.752 1372.51 505.037 1373.18 508.22C1374.02 512.148 1379.03 505.977 1380.76 504.607C1386.99 499.686 1393.37 495.348 1399.86 491.61C1412.96 484.06 1426.52 478.95 1440.23 476.402C1447.93 474.971 1455.69 474.348 1463.43 474.556Z" fill="#FFD393"/>
            <path id="Vector_88" d="M1576.68 475.579C1581.65 477.36 1586.61 479.142 1591.57 480.923C1595.39 482.296 1599.33 483.747 1602.49 487.237C1605.65 490.726 1607.85 496.82 1606.78 502.45C1592.45 494.057 1577.68 487.343 1562.65 482.368C1547.51 477.357 1532.37 475.73 1517.08 472.638C1517.83 457.698 1532.32 463.095 1538.59 464.218C1551.46 466.524 1564.1 471.058 1576.68 475.579Z" fill="#FFD393"/>
            <path id="Vector_89" d="M1450.84 488.164C1444.73 478.916 1441.46 465.676 1442.09 452.749C1441.6 454.681 1440.11 455.928 1438.74 455.561C1439.64 450.701 1441.12 446.079 1443.08 441.972C1440.88 442.583 1438.67 443.196 1436.46 443.807C1436.95 439.041 1438.57 434.548 1440.98 431.317C1439.75 431.566 1438.71 429.676 1438.67 427.841C1438.63 426.004 1439.29 424.309 1439.99 422.796C1445.23 411.477 1453.62 404.031 1462.45 399.965C1471.28 395.901 1480.6 394.922 1489.83 394.318C1502.06 393.519 1514.98 393.57 1525.63 402.555C1526.74 403.492 1527.89 404.666 1528.28 406.478C1527.01 406.923 1525.75 407.367 1524.49 407.812C1529.97 409.171 1534.77 415.455 1536.37 423.376C1534.54 423.264 1532.71 423.151 1530.87 423.039C1534.01 426.893 1536.36 432.157 1537.53 437.96C1537.73 438.953 1537.9 440.021 1537.7 441.013C1537.15 443.731 1534.61 443.816 1532.73 443.338C1533.17 448.582 1533.61 453.826 1534.05 459.07C1534.14 460.182 1534.23 461.36 1533.92 462.383C1533.19 464.804 1530.92 464.819 1529.15 464.448C1528.46 469.032 1527.76 473.616 1527.07 478.2C1526.61 481.211 1526.15 484.272 1525.12 486.954C1523.45 491.298 1520.45 494.234 1517.27 495.834C1514.09 497.434 1510.69 497.838 1507.34 498.154C1501.54 498.702 1495.73 499.024 1489.92 499.124C1481.5 499.267 1472.92 498.896 1464.99 494.713C1461.58 492.916 1458.26 490.409 1454.66 489.946" fill="black"/>
            <path id="Vector_90" d="M1519.61 481.151C1519.7 479.199 1520.77 477.668 1521.86 476.59C1523.34 475.138 1525.27 474.123 1526.86 475.266C1527.96 476.051 1528.67 477.7 1529.13 479.376C1531.2 486.824 1529.2 496.269 1524.64 500.618C1523.63 501.577 1522.5 502.314 1521.31 502.394C1520.11 502.474 1518.86 501.813 1518.13 500.403C1517.39 498.971 1517.3 497.05 1517.23 495.25C1517.13 492.279 1517.03 489.221 1517.69 486.413" fill="#F89785"/>
            <path id="Vector_91" d="M1451.91 481.151C1451.82 479.199 1450.76 477.668 1449.66 476.59C1448.18 475.138 1446.26 474.123 1444.66 475.266C1443.56 476.051 1442.86 477.7 1442.39 479.376C1440.33 486.824 1442.32 496.269 1446.89 500.618C1447.89 501.577 1449.03 502.314 1450.22 502.394C1451.41 502.474 1452.67 501.813 1453.39 500.403C1454.13 498.971 1454.22 497.05 1454.29 495.25C1454.4 492.279 1454.5 489.221 1453.84 486.413" fill="#F89785"/>
            <path id="Vector_92" d="M1456.25 517.471C1454.91 530.337 1454.61 543.717 1457.16 556.171C1459.71 568.623 1465.45 580.087 1473.53 585.09C1478.88 588.396 1484.9 588.716 1490.6 587.234C1497.69 585.391 1504.69 580.505 1508.96 571.896C1512.71 564.314 1514 554.677 1514.72 545.317C1515.61 533.642 1515.66 521.198 1511.86 510.895C1507.54 499.175 1498.52 492.081 1489.54 491.854C1480.55 491.628 1471.78 497.732 1465.34 507.054" fill="#FFD393"/>
            <path id="Vector_93" d="M1512.23 532.829C1510.69 540.635 1508.96 548.442 1506.1 555.38C1504.46 559.362 1502.4 563.069 1499.98 566.026C1498.18 568.221 1496.19 569.995 1494.02 571.217C1489.97 573.451 1485.53 573.582 1481.24 572.794C1478.64 572.308 1476.04 571.48 1473.72 569.692C1470.82 567.471 1468.53 563.896 1466.65 559.875C1465.95 558.39 1465.31 556.839 1464.71 555.275C1462.12 548.494 1460.17 541.173 1458.93 533.603L1467.09 531.303C1479.94 521.774 1495.04 522.168 1509.32 524.442C1510.15 524.574 1511.04 524.744 1511.7 525.534C1513.07 527.151 1512.72 530.331 1512.23 532.829Z" fill="#F89785"/>
            <path id="Vector_94" d="M1512.23 532.829C1510.69 540.635 1508.96 548.442 1506.1 555.38C1504.46 559.362 1502.4 563.069 1499.98 566.026C1497.22 567.826 1494.36 569.246 1491.39 569.995C1484.6 571.743 1477.42 569.89 1471.43 564.87C1469.73 563.45 1468.13 561.768 1466.65 559.875C1465.95 558.39 1465.31 556.839 1464.71 555.275C1462.12 548.494 1460.17 541.173 1458.93 533.603L1467.09 531.303C1479.94 521.774 1495.04 522.168 1509.32 524.442C1510.15 524.574 1511.04 524.744 1511.7 525.534C1513.07 527.151 1512.72 530.331 1512.23 532.829Z" fill="#E4746A"/>
            <path id="Vector_95" d="M1448.1 449.475C1448.84 474.173 1450.41 498.816 1452.81 523.281C1453.2 527.33 1453.63 531.42 1454.68 535.2C1457.18 544.145 1462.9 550.29 1468.93 553.948C1480.82 561.162 1494.85 560.081 1506.18 551.082C1510.92 547.314 1515.32 541.987 1517.61 534.75C1519.23 529.617 1519.69 523.869 1520.12 518.236C1521.38 502.048 1522.64 485.859 1523.89 469.671C1524.6 460.595 1525.2 450.761 1522.05 442.917C1519.24 435.928 1513.99 431.986 1508.81 429.338C1494.41 421.969 1478.36 421.945 1463.94 429.27C1459.72 431.415 1455.06 435.262 1454.52 441.845" fill="#F89785"/>
            <path id="Vector_96" d="M1369.56 968.443C1369.52 969.01 1369.5 969.622 1369.7 970.108C1369.91 970.626 1370.32 970.869 1370.7 971.076C1378.97 975.525 1387.74 977.947 1396.53 978.214C1397.06 978.23 1397.62 978.233 1398.11 977.912C1399.17 977.219 1399.56 975.323 1399.83 973.651C1400.4 970.115 1400.97 966.579 1401.54 963.044C1401.79 961.516 1401.99 959.708 1401.29 958.538C1400.82 957.768 1400.09 957.52 1399.41 957.312C1391.17 954.806 1382.92 952.299 1374.68 949.792C1371.82 948.922 1371.65 953.544 1371.02 956.83C1370.31 960.628 1369.81 964.518 1369.56 968.443Z" fill="#FFD393"/>
            <path id="Vector_97" d="M1493.86 510.507C1494.02 510.59 1494.15 510.897 1494.12 511.47C1494.08 512.034 1493.88 512.882 1493.35 513.745C1492.83 514.598 1492 515.464 1490.85 515.921C1489.72 516.384 1488.36 516.379 1486.94 516.083C1486.22 515.937 1485.6 515.783 1484.98 515.611C1484.37 515.434 1483.79 515.217 1483.27 514.921C1482.21 514.354 1481.43 513.43 1480.99 512.564C1480.53 511.691 1480.38 510.884 1480.35 510.37C1480.32 509.846 1480.4 509.597 1480.49 509.578C1480.69 509.512 1480.83 510.44 1481.73 511.481C1482.19 511.996 1482.82 512.472 1483.71 512.733C1484.15 512.87 1484.65 512.956 1485.22 513.02C1485.81 513.075 1486.44 513.136 1487.13 513.202C1488.47 513.322 1489.53 513.243 1490.36 512.961C1491.17 512.692 1491.78 512.228 1492.23 511.829C1492.68 511.422 1492.99 511.046 1493.24 510.795C1493.49 510.546 1493.69 510.416 1493.86 510.507Z" fill="#1C1C3C"/>
            <path id="Vector_98" d="M1505.69 493.313C1506.53 493.313 1507.21 491.535 1507.21 489.341C1507.21 487.148 1506.53 485.37 1505.69 485.37C1504.85 485.37 1504.17 487.148 1504.17 489.341C1504.17 491.535 1504.85 493.313 1505.69 493.313Z" fill="#1C1C3C"/>
            <path id="Vector_99" d="M1467.54 493.313C1468.38 493.313 1469.06 491.535 1469.06 489.341C1469.06 487.148 1468.38 485.37 1467.54 485.37C1466.71 485.37 1466.03 487.148 1466.03 489.341C1466.03 491.535 1466.71 493.313 1467.54 493.313Z" fill="#1C1C3C"/>
            <path id="Vector_100" d="M1511.97 476.552C1511.71 476.965 1511.28 476.995 1510.67 476.809C1510.04 476.624 1509.23 476.23 1507.96 475.784C1506.67 475.355 1505.68 475.045 1505.03 474.603C1504.39 474.174 1504.09 473.658 1504.12 473.112C1504.14 472.571 1504.47 472.102 1505.18 471.822C1505.89 471.562 1506.99 471.423 1508.56 471.945C1510.13 472.483 1511.21 473.554 1511.71 474.487C1512.21 475.434 1512.21 476.17 1511.97 476.552Z" fill="#1C1C3C"/>
            <path id="Vector_101" d="M1462.07 476.235C1461.86 475.809 1461.95 475.05 1462.56 474.088C1463.17 473.145 1464.33 471.979 1466.17 471.295C1468.01 470.643 1469.4 470.887 1470.23 471.307C1471.07 471.741 1471.39 472.352 1471.33 472.874C1471.28 473.426 1470.87 473.8 1470.13 474.091C1469.38 474.393 1468.29 474.601 1466.79 475.126C1465.31 475.682 1464.27 476.247 1463.52 476.489C1462.76 476.739 1462.29 476.685 1462.07 476.235Z" fill="#1C1C3C"/>
            <path id="Vector_102" d="M1506.15 520.882C1506.28 521.357 1505.34 522.526 1503 524.043C1501.82 524.785 1500.3 525.625 1498.38 526.384C1496.46 527.159 1494.15 527.879 1491.41 528.327C1488.68 528.775 1486.31 528.823 1484.33 528.689C1482.34 528.572 1480.73 528.246 1479.48 527.902C1476.97 527.18 1475.89 526.343 1475.94 525.838C1476 525.269 1477.19 525.127 1479.65 525.126C1480.89 525.109 1482.45 525.14 1484.35 525.057C1486.26 524.989 1488.51 524.838 1491.12 524.408C1493.73 523.98 1495.96 523.398 1497.82 522.847C1499.7 522.31 1501.21 521.776 1502.42 521.392C1504.83 520.593 1506 520.347 1506.15 520.882Z" fill="#1C1C3C"/>
            <path id="Vector_103" d="M1352.76 539.963C1353.79 540.512 1353.9 544.169 1352.79 551.233C1352.25 554.768 1351.41 559.151 1350.39 564.484C1349.39 569.82 1348.18 576.105 1347.24 583.551C1346.3 590.985 1345.98 597.48 1345.99 602.966C1345.98 605.713 1346.1 608.201 1346.22 610.45C1346.37 612.692 1346.54 614.692 1346.74 616.447C1346.94 618.205 1347.16 619.717 1347.35 621.01C1347.55 622.302 1347.71 623.368 1347.84 624.217C1348.13 625.909 1348.2 626.791 1348.03 626.903C1347.86 627.016 1347.48 626.353 1346.83 624.829C1346.53 624.057 1346.17 623.062 1345.76 621.824C1345.37 620.579 1344.94 619.094 1344.51 617.332C1344.08 615.57 1343.65 613.535 1343.25 611.214C1342.88 608.888 1342.5 606.279 1342.24 603.369C1341.71 597.556 1341.49 590.544 1342.03 582.458C1342.58 574.387 1343.62 567.625 1344.69 562.062C1345.78 556.498 1346.91 552.118 1347.95 548.765C1350.03 542.065 1351.74 539.422 1352.76 539.963Z" fill="#1C1C3C"/>
            <path id="Vector_104" d="M1373.11 492.406C1372.79 492.175 1372.91 490.599 1373.78 487.586C1374.65 484.592 1376.28 480.122 1379.27 474.636C1382.28 469.182 1384.89 465.908 1386.69 464.028C1388.5 462.157 1389.51 461.669 1389.73 462.08C1389.96 462.525 1389.36 463.785 1387.92 466.124C1386.49 468.479 1384.2 471.912 1381.32 477.126C1378.47 482.373 1376.67 486.401 1375.41 488.961C1374.16 491.532 1373.45 492.659 1373.11 492.406Z" fill="#1C1C3C"/>
            <path id="Vector_105" d="M1337.13 584.731C1336.84 585.016 1336.27 584.708 1335.56 583.439C1334.86 582.178 1334 579.91 1333.56 576.426C1333.15 572.932 1333.43 570.361 1333.79 568.817C1334.16 567.258 1334.62 566.676 1334.96 566.79C1335.33 566.91 1335.53 567.685 1335.65 569.144C1335.78 570.602 1335.83 572.764 1336.17 575.727C1336.54 578.682 1337.01 580.732 1337.22 582.168C1337.45 583.597 1337.45 584.426 1337.13 584.731Z" fill="#1C1C3C"/>
            <path id="Vector_106" d="M1618.94 509.065C1620.54 508.292 1622.93 511.782 1625.6 520.775C1626.93 525.278 1628.34 531.18 1629.58 538.713C1630.81 546.222 1631.85 555.463 1632.03 566.31C1632.12 571.722 1631.95 576.737 1631.67 581.341C1631.4 585.948 1630.98 590.147 1630.49 593.949C1630.03 597.757 1629.46 601.164 1628.92 604.207C1628.37 607.248 1627.82 609.923 1627.28 612.253C1626.76 614.587 1626.24 616.574 1625.79 618.252C1625.32 619.919 1624.95 621.295 1624.6 622.355C1623.9 624.482 1623.5 625.457 1623.33 625.368C1623.16 625.28 1623.23 624.132 1623.51 621.84C1623.65 620.693 1623.82 619.252 1624.03 617.504C1624.22 615.755 1624.46 613.706 1624.68 611.33C1624.9 608.958 1625.11 606.264 1625.29 603.243C1625.46 600.218 1625.62 596.872 1625.66 593.185C1625.73 589.504 1625.7 585.49 1625.54 581.151C1625.38 576.814 1625.11 572.152 1624.62 567.191C1623.66 557.28 1622.24 548.984 1621.01 541.898C1619.78 534.823 1618.75 528.989 1618.14 524.261C1616.88 514.814 1617.32 509.846 1618.94 509.065Z" fill="#1C1C3C"/>
            <path id="Vector_107" d="M1630.49 617.372C1629.89 616.745 1630.37 614.213 1632.6 609.501C1634.84 604.79 1636.28 603.276 1636.88 603.903C1637.48 604.53 1637 607.063 1634.77 611.773C1632.53 616.485 1631.09 618 1630.49 617.372Z" fill="#1C1C3C"/>
            <path id="Vector_108" d="M1564.62 689.305C1564.6 689.439 1564.22 689.464 1563.47 689.389C1562.72 689.325 1561.6 689.107 1560.09 688.887C1558.57 688.698 1556.67 688.378 1554.35 688.188C1553.2 688.049 1551.94 687.968 1550.57 687.901C1549.21 687.796 1547.74 687.773 1546.17 687.752C1543.03 687.706 1539.46 687.821 1535.46 688.169C1531.47 688.491 1527.04 689.064 1522.18 689.909C1517.31 690.745 1512.01 691.847 1506.23 693.164C1500.46 694.489 1494.2 695.965 1487.52 697.666C1480.84 699.376 1474.67 701.101 1468.99 702.852C1463.33 704.581 1458.15 706.441 1453.22 707.932C1448.31 709.434 1443.65 710.469 1439.49 710.941C1435.33 711.441 1431.64 711.522 1428.4 711.407C1421.93 711.161 1417.28 710.226 1414.22 709.187C1411.17 708.128 1409.72 706.897 1409.73 705.637C1409.74 704.374 1411.22 703.206 1414.26 702.239C1417.31 701.251 1421.93 700.53 1428.14 699.701C1431.24 699.28 1434.74 698.806 1438.62 698.095C1442.5 697.406 1446.7 696.38 1451.48 694.976C1456.23 693.598 1461.57 691.901 1467.45 690.475C1473.31 689.034 1479.65 687.777 1486.49 686.67C1493.32 685.569 1499.65 684.743 1505.53 684.057C1511.41 683.378 1516.84 682.906 1521.82 682.675C1526.8 682.436 1531.34 682.445 1535.42 682.666C1539.5 682.862 1543.13 683.257 1546.32 683.768C1547.91 684.022 1549.4 684.267 1550.77 684.583C1552.15 684.864 1553.41 685.145 1554.57 685.475C1556.89 686.047 1558.78 686.712 1560.28 687.217C1561.77 687.75 1562.86 688.254 1563.58 688.59C1564.3 688.938 1564.64 689.173 1564.62 689.305Z" fill="#1C1C3C"/>
            <path id="Vector_109" d="M1575.27 790.143C1575.26 790.415 1573.69 790.675 1570.42 790.91C1568.79 790.968 1566.74 791.269 1564.25 791.54C1561.76 791.74 1558.85 792.319 1555.48 792.809C1548.74 794.016 1540.23 795.995 1529.8 798.757C1524.58 800.115 1518.88 801.65 1512.64 803.098C1506.4 804.586 1499.61 805.931 1492.25 806.737C1477.53 808.626 1464.68 806.218 1454.31 802.973C1443.91 799.877 1435.45 797.279 1428.78 795.175C1422.12 793.069 1417.26 791.449 1414.07 790.289C1410.89 789.129 1409.38 788.428 1409.41 788.161C1409.44 787.894 1411.02 788.085 1414.27 788.782C1417.52 789.479 1422.43 790.682 1429.14 792.439C1435.85 794.192 1444.35 796.509 1454.77 799.405C1457.37 800.118 1460.09 800.84 1462.93 801.479C1464.35 801.797 1465.81 802.094 1467.29 802.352C1468.77 802.633 1470.3 802.723 1471.85 802.924C1474.95 803.399 1478.19 803.345 1481.56 803.482C1484.93 803.33 1488.43 803.274 1492.06 802.803C1499.31 802.011 1506.03 800.709 1512.24 799.28C1518.45 797.892 1524.16 796.436 1529.39 795.175C1539.86 792.606 1548.47 790.895 1555.29 790.034C1558.7 789.718 1561.65 789.331 1564.18 789.339C1566.69 789.275 1568.77 789.199 1570.41 789.375C1573.7 789.612 1575.27 789.871 1575.27 790.143Z" fill="#1C1C3C"/>
            <path id="Vector_110" d="M1543.65 883.801C1543.65 883.937 1543.49 884.069 1543.18 884.461C1542.86 884.801 1542.39 885.328 1541.75 885.604C1540.47 886.14 1538.54 886.639 1535.89 887.05C1530.6 887.895 1522.49 888.436 1511.13 888.769C1499.76 889.123 1491.6 889.134 1486.27 889.042C1480.95 888.939 1478.47 888.775 1478.43 888.24C1478.4 887.732 1480.79 886.748 1486.04 885.222C1491.29 883.737 1499.41 881.723 1510.87 880.491C1522.33 879.305 1530.56 879.651 1535.88 880.447C1538.55 880.854 1540.5 881.375 1541.77 881.955C1542.41 882.245 1542.88 882.784 1543.19 883.132C1543.5 883.529 1543.65 883.665 1543.65 883.801Z" fill="#1C1C3C"/>
            <path id="Vector_111" d="M1524.86 435.142C1523.88 431.752 1522.1 429.012 1520.2 426.657C1513.18 417.999 1504.04 413.691 1494.94 412.927C1485.83 412.163 1476.73 414.75 1468 418.67C1461.03 421.799 1453.82 426.246 1449.66 435.124C1443.49 448.288 1445.79 466.239 1448.25 480.675C1448.64 482.966 1449.53 485.763 1451.11 485.573C1451.31 478.813 1450.53 472.059 1450.65 465.295C1450.77 458.53 1451.96 451.37 1455.32 446.804C1456.89 444.671 1458.83 443.244 1460.81 442.086C1463.67 440.411 1466.63 439.262 1469.66 438.467C1470.39 443.196 1477.02 449.297 1478.73 450.319C1482.22 452.409 1486.08 453.211 1489.82 452.38C1487.99 450.998 1486.46 448.746 1485.52 446.035C1492.37 452.724 1501.56 453.751 1509 448.663C1503.85 444.205 1498.5 440.271 1493.01 436.828C1500.13 437.185 1507.23 438.451 1513.87 442.171C1515.38 443.018 1516.89 444.012 1518.11 445.583C1520.04 448.069 1521.08 451.803 1521.47 455.557C1521.85 459.312 1521.63 463.138 1521.41 466.922C1521.02 473.744 1520.63 480.568 1520.23 487.391C1520.18 488.188 1520.3 489.28 1520.83 489.339C1521.07 489.365 1521.28 489.148 1521.46 488.92C1523.02 486.954 1523.43 483.696 1523.73 480.696C1524.79 469.825 1525.49 458.875 1525.82 447.9C1525.95 443.587 1526 439.11 1524.86 435.142Z" fill="black"/>
            </g>
            <g id="left-arm">
            <path id="Vector_112" d="M1419.07 501.523C1417.14 523.457 1413.39 545.262 1406.4 564.804C1399.42 584.333 1389.03 601.563 1375.87 611.866C1369.83 616.598 1362.84 618.438 1357.02 623.76C1350.68 629.556 1344.52 635.431 1338.44 641.24C1314.94 663.647 1292.69 685.004 1266.53 696.832C1254.63 702.22 1242.06 704.35 1229.65 703.1C1212.71 701.38 1195.43 692.679 1183.91 674.134C1172.39 655.604 1168.13 626.02 1176.77 604.296C1180.58 594.702 1186.46 587.316 1192.64 581.007C1197.89 575.646 1203.53 570.875 1209.72 568.667C1224.14 563.554 1236.9 566.328 1249.21 578.629C1259.97 561.912 1271.64 547.547 1284.04 534.668C1296.55 521.658 1309.79 510.131 1323.56 499.196C1333.11 491.613 1342.91 484.74 1352.87 478.392C1361.55 472.859 1370.34 467.707 1379.2 462.819C1387.33 458.311 1396.93 450.649 1405.56 449.098C1420.72 446.351 1420.25 488.026 1419.07 501.523Z" fill="#F89785"/>
            <path id="Vector_113" d="M1419.07 501.523C1417.14 523.457 1413.39 545.262 1406.4 564.804C1399.42 584.333 1389.04 601.563 1375.87 611.866C1369.83 616.598 1362.84 618.438 1357.02 623.76C1356.79 623.971 1356.56 624.181 1356.33 624.405C1353.1 627.362 1349.91 630.332 1346.77 633.315C1343.97 635.956 1341.2 638.611 1338.44 641.24C1338.27 641.134 1338.1 641.017 1337.93 640.911C1321.41 630.226 1306.26 613.812 1296.15 591.64C1288.53 574.923 1284.01 554.749 1284.04 534.668C1287.11 531.474 1290.23 528.373 1293.38 525.349C1296.77 522.09 1300.21 518.924 1303.69 515.835C1310.17 510.065 1316.8 504.558 1323.56 499.196C1333.11 491.613 1342.91 484.74 1352.87 478.392C1361.55 472.859 1370.34 467.707 1379.2 462.819C1387.33 458.311 1396.93 450.649 1405.56 449.098C1420.72 446.351 1420.25 488.026 1419.07 501.523Z" fill="#FBB569"/>
            <path id="Vector_114" d="M1224.87 646.276C1236.34 632.139 1240.96 614.911 1239.3 592.902C1239.12 590.577 1238.83 588.221 1239.1 585.917C1239.52 582.445 1241.13 579.611 1242.44 576.673C1244.93 571.085 1246.47 564.572 1246.88 557.896C1247 556.016 1247.01 554.011 1246.38 552.378C1245.64 550.49 1244.16 549.474 1242.7 549.215C1236.28 548.075 1228.36 563.228 1221.97 561.776C1220.74 561.497 1217.71 554.515 1215.29 550.235C1207.08 535.717 1200.47 517.287 1191.22 517.48C1189.27 517.521 1186.28 516.39 1183.94 520.857C1183.23 522.199 1183.73 527.665 1183.94 529.339C1184.76 536.153 1186.98 543.38 1188.78 550.262C1189.2 551.848 1188.17 553.443 1187.09 552.907C1182.46 550.619 1177.56 547.621 1173.47 544.226C1164.79 537.015 1151.51 536.878 1146.9 541.593C1145.88 542.642 1143.94 547.206 1144.13 549.034C1144.27 550.29 1144.96 551.228 1145.61 552.04C1148.72 555.881 1163.4 569.117 1166.9 572.121C1157.63 572.301 1148.42 576.414 1140.62 583.868C1140.01 584.457 1139.48 585.28 1139.21 586.291C1138.18 590.133 1141.15 592.648 1143.54 593.798C1148.07 595.981 1152.61 598.165 1157.14 600.349C1152.62 603.25 1148.4 607.146 1144.64 611.87C1142.54 614.513 1140.41 618.059 1141.3 622.329C1141.84 624.877 1143.31 626.701 1145.02 627.502C1149.01 629.366 1152.88 626.584 1156.8 626.034C1157.85 625.886 1158.93 626.37 1159.68 627.484C1160.9 629.313 1161.28 631.883 1162.06 634.105C1163.02 636.854 1164.02 639.58 1165.1 642.232C1167.2 647.36 1169.6 652.249 1172.56 656.354C1176.02 661.153 1180.36 664.832 1185.05 666.066C1190.34 667.46 1195.84 665.314 1201.04 663.963C1209.36 661.803 1214.92 658.548 1224.87 646.276Z" fill="white"/>
            <path id="Vector_115" d="M1265.08 646.102C1264.71 646.11 1264.38 643.446 1264.06 637.728C1263.89 634.87 1263.72 631.252 1263.41 626.859C1263.09 622.474 1262.64 617.292 1261.63 611.463C1259.55 599.806 1256.17 592.605 1253.76 588.427C1251.3 584.229 1249.84 582.639 1250.08 582.11C1250.23 581.723 1252.09 582.493 1255.1 586.482C1256.59 588.477 1258.28 591.352 1259.92 595.304C1261.54 599.258 1263.11 604.292 1264.19 610.465C1265.27 616.625 1265.65 622.033 1265.85 626.556C1266.03 631.089 1266.01 634.77 1265.93 637.661C1265.78 643.443 1265.44 646.094 1265.08 646.102Z" fill="#E4746A"/>
            <path id="Vector_116" d="M1356.33 624.405C1353.1 627.362 1349.91 630.332 1346.77 633.315C1339.32 628.018 1332.75 620.146 1326.4 612.235C1317.95 601.747 1309.52 590.76 1303.82 576.776C1297.53 561.334 1295.01 543.356 1293.38 525.35C1296.77 522.091 1300.21 518.924 1303.69 515.836C1303.86 517.19 1303.95 518.582 1304.03 519.936C1304.75 531.896 1305.86 543.921 1308.67 555.185C1313.02 572.664 1321.3 587.541 1330.93 599.475C1338.73 609.16 1347.43 617.059 1356.33 624.405Z" fill="#FFD393"/>
            <path id="Vector_117" d="M1211.88 643.08C1211.82 642.831 1212.17 642.366 1212.94 641.701C1213.31 641.342 1213.79 640.922 1214.37 640.414C1214.94 639.888 1215.61 639.279 1216.36 638.522C1217.11 637.766 1217.93 636.863 1218.83 635.799C1219.72 634.704 1220.69 633.47 1221.68 631.981C1223.67 629.016 1225.84 625.176 1227.89 620.187C1229.93 615.186 1231.33 610.559 1232.46 606.621C1233.57 602.671 1234.39 599.382 1235.05 596.791C1236.35 591.6 1237.01 589.211 1237.19 589.296C1237.35 589.375 1237.03 591.901 1236.04 597.269C1235.54 599.951 1234.87 603.346 1233.89 607.449C1232.89 611.54 1231.59 616.374 1229.56 621.661C1227.52 626.955 1225.26 631.055 1223.12 634.155C1222.05 635.712 1220.99 636.984 1220.01 638.079C1219.02 639.145 1218.09 640.013 1217.25 640.696C1216.4 641.381 1215.64 641.882 1214.98 642.271C1214.32 642.64 1213.76 642.892 1213.31 643.057C1212.4 643.339 1211.94 643.329 1211.88 643.08Z" fill="#1C1C3C"/>
            <path id="Vector_118" d="M1168.21 620.555C1168.13 620.323 1168.48 619.699 1169.3 618.693C1169.72 618.222 1170.2 617.541 1170.79 616.734C1171.4 615.979 1172.04 614.946 1172.8 613.8C1173.19 613.245 1173.54 612.542 1173.96 611.863C1174.37 611.187 1174.78 610.423 1175.2 609.597C1175.63 608.79 1176.08 607.925 1176.52 606.972C1176.98 606.042 1177.45 605.05 1177.92 603.979C1178.89 601.873 1179.89 599.49 1181.01 596.909C1182.14 594.328 1183.34 591.508 1184.8 588.586C1186.25 585.674 1187.69 583.026 1189.24 580.851C1190.75 578.64 1192.33 576.831 1193.82 575.425C1195.32 574.008 1196.7 572.864 1197.93 571.813C1199.16 570.765 1200.24 569.819 1201.16 568.925C1202.08 568.017 1202.86 567.205 1203.47 566.432C1204.1 565.676 1204.59 565.006 1204.96 564.448C1205.35 563.91 1205.6 563.465 1205.8 563.196C1205.99 562.924 1206.11 562.807 1206.14 562.847C1206.18 562.885 1206.14 563.076 1206.02 563.432C1205.89 563.784 1205.7 564.321 1205.36 564.964C1205.04 565.627 1204.59 566.414 1204 567.299C1203.42 568.201 1202.66 569.145 1201.77 570.188C1200.86 571.216 1199.8 572.291 1198.61 573.452C1197.41 574.615 1196.08 575.856 1194.68 577.317C1193.28 578.774 1191.87 580.529 1190.49 582.695C1189.08 584.814 1187.74 587.403 1186.38 590.272C1185.01 593.144 1183.86 595.967 1182.75 598.55C1181.64 601.147 1180.63 603.55 1179.61 605.699C1179.12 606.784 1178.63 607.795 1178.14 608.746C1177.66 609.713 1177.18 610.594 1176.7 611.416C1176.24 612.25 1175.78 613.02 1175.32 613.701C1174.85 614.382 1174.45 615.071 1174 615.615C1173.13 616.737 1172.38 617.701 1171.64 618.362C1170.94 619.069 1170.35 619.615 1169.83 619.923C1168.82 620.601 1168.3 620.785 1168.21 620.555Z" fill="#1C1C3C"/>
            </g>
            </g>
            <g id="ball">
            <path id="Vector_65" d="M698.859 1941.42C698.85 1966.42 707.989 1990.61 724.651 2009.69C741.313 2028.76 764.415 2041.48 789.842 2045.57C815.268 2049.67 841.368 2044.87 863.487 2032.04C885.609 2019.21 902.317 1999.18 910.632 1975.51C918.95 1951.85 918.335 1926.09 908.9 1902.82C899.462 1879.55 881.82 1860.29 859.112 1848.47C836.401 1836.64 810.104 1833.02 784.898 1838.25C759.695 1843.48 737.225 1857.22 721.488 1877.02C706.826 1895.48 698.868 1918.12 698.859 1941.42Z" fill="url(#paint0_linear_2_263)"/>
            <path id="Vector_66" d="M702.862 1941.42C702.828 1965.51 711.612 1988.84 727.653 2007.23C743.694 2025.63 765.947 2037.9 790.448 2041.86C814.946 2045.82 840.1 2041.22 861.427 2028.87C882.751 2016.51 898.861 1997.21 906.886 1974.41C914.908 1951.61 914.325 1926.78 905.238 1904.36C896.152 1881.94 879.15 1863.37 857.269 1851.97C835.385 1840.57 810.04 1837.09 785.751 1842.13C761.465 1847.17 739.81 1860.41 724.651 1879.5C710.554 1897.25 702.894 1919.01 702.862 1941.42Z" fill="#E0E0E0"/>
            <path id="Vector_67" d="M748.934 1891.46V1930.92" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_68" d="M826.63 1927.4L784.185 1954.59" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_69" d="M784.185 1866.95L833.883 1887.1" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_70" d="M867.305 1934.41L864.578 1995.76" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_71" d="M833.882 2014.17L777.859 1987.01" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_72" d="M748.934 1991.4V2025.65" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_73" d="M728.161 1965.09L703.733 1954.59" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_74" d="M864.578 1883.58L862.721 1854.9" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_75" d="M880.854 1916.9L911.143 1925.29" stroke="#535461" stroke-miterlimit="10"/>
            <path id="Vector_76" d="M888.977 1916.9L865.506 1877.44L826.658 1883.58V1927.4L868.204 1948.45L888.977 1916.9Z" fill="black"/>
            <path id="Vector_77" d="M724.651 1879.39L748.963 1891.46C757.086 1880.93 790.509 1868.66 790.509 1868.66L787.027 1841.73C762.227 1846.56 740.071 1859.94 724.651 1879.39Z" fill="black"/>
            <path id="Vector_78" d="M790.509 1950.2L748.035 1930.92L724.535 1963.34L748.934 2001.02L790.509 1994.89V1950.2Z" fill="black"/>
            <path id="Vector_79" d="M826.63 2008.91V2041.3C840.236 2038.87 853.214 2033.86 864.81 2026.54C876.406 2019.22 886.395 2009.74 894.199 1998.66L864.578 1986.87L826.63 2008.91Z" fill="black"/>
            </g>
            </g>
            <defs>
            <linearGradient id="paint0_linear_2_263" x1="807.655" y1="2046.96" x2="807.655" y2="1835.88" gradientUnits="userSpaceOnUse">
            <stop stop-color="#808080" stop-opacity="0.25"/>
            <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
            </linearGradient>
            </defs>
        </svg>

    </>
        
    );
}