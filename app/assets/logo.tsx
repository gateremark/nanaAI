type Props = {
    className?: string;
};

export default function Logo({ className }: Props) {
    return (
        <svg height="90" width="340" className={className}>
            <>
                <defs>
                    <linearGradient id="LogoGradient">
                        <stop stop-color="#51504f" offset="0"></stop>
                        <stop stop-color="#939598" offset="0.5"></stop>
                        <stop stop-color="#51504f" offset="1"></stop>
                    </linearGradient>
                </defs>
                <g transform="matrix(26,0,1,26,0,-20)" fill="#4A4A4A">
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M4.56576,3.4977c-.07875-.05621-.14425-.1018-.16046-.08432-.01589.01671.02492.09646.105.1637.07971.06787.16731.08655.18182.05814C4.707,3.60652,4.64417,3.554,4.56576,3.4977Z"></path>
                            <path d="M4.32354,3.53219c-.07148-.07522-.13012-.12067-.1425-.09063-.012.02956.03125.12568.10766.2051.0762.08.15283.10771.1599.0734C4.456,3.68568,4.39483,3.60756,4.32354,3.53219Z"></path>
                            <path d="M4.08307,3.536c-.06765-.0799-.12363-.11216-.13314-.06568a.37136.37136,0,0,0,.11327.23535c.0752.08157.144.10262.14566.05491A.48615.48615,0,0,0,4.08307,3.536Z"></path>
                            <path d="M3.83748,3.53784c-.067-.076-.12342-.08874-.13046-.02506a.39532.39532,0,0,0,.12191.25655c.07618.077.14.08291.13769.01849A.51114.51114,0,0,0,3.83748,3.53784Z"></path>
                            <path d="M3.582,3.54712c-.06887-.06724-.12772-.05844-.13277.02168a.393.393,0,0,0,.13261.27115c.07894.069.14029.05547.13517-.026A.48327.48327,0,0,0,3.582,3.54712Z"></path>
                            <path d="M3.31327,3.56349c-.0727-.05655-.13564-.02674-.13925.068a.37568.37568,0,0,0,.14433.28124c.08319.05989.14457.02584.13777-.072A.43376.43376,0,0,0,3.31327,3.56349Z"></path>
                            <path d="M3.037,3.6056c-.07474-.057-.14207-.028-.14991.06542a.36077.36077,0,0,0,.13883.28262c.08463.06256.15172.031.14957-.06765A.40629.40629,0,0,0,3.037,3.6056Z"></path>
                            <path d="M2.74469,3.65646c-.07551-.06356-.14624-.048-.15948.03364a.34244.34244,0,0,0,.12655.27374c.08394.07036.15751.05551.162-.03286A.38533.38533,0,0,0,2.74469,3.65646Z"></path>
                            <path d="M2.43349,3.6921c-.07506-.07-.14823-.06891-.16639.00011a.31751.31751,0,0,0,.11256.26127c.08176.07693.16022.07957.17135.00375A.35911.35911,0,0,0,2.43349,3.6921Z"></path>
                            <path d="M2.10758,3.709c-.07167-.07864-.14583-.09494-.1698-.04043a.28523.28523,0,0,0,.09118.24727c.07622.08443.15792.10775.177.04752A.3271.3271,0,0,0,2.10758,3.709Z"></path>
                            <path d="M1.76357,3.69786c-.06736-.08239-.1398-.11083-.16641-.0685-.0263.04244.005.14239.075.22878s.15026.1233.174.07671C1.87,3.88851,1.83081,3.77991,1.76357,3.69786Z"></path>
                            <path d="M1.41074,3.66244c-.06124-.08409-.13-.12274-.1576-.091-.02737.03186-.00282.12341.05927.2097.06195.0861.138.13322.16456.09917S1.47185,3.74642,1.41074,3.66244Z"></path>
                            <path d="M1.05666,3.60764c-.054-.08447-.11707-.13121-.14428-.10845-.027.023-.008.10759.04554.19254s.12228.13838.14962.1148S1.1105,3.69173,1.05666,3.60764Z"></path>
                            <path d="M.70929,3.53947C.66284,3.45515.60622,3.40095.58073,3.41654s-.01047.09531.03513.17963c.04542.08432.10545.14191.13172.12635S.75567,3.62375.70929,3.53947Z"></path>
                            <ellipse
                                cx="0.33283"
                                cy="3.47913"
                                rx="0.0456"
                                ry="0.1719"
                                transform="translate(-1.27067 0.37367) rotate(-21.84494)"
                            ></ellipse>
                        </g>
                        <g>
                            <path d="M4.30661,3.0675c-.04185-.07834-.07873-.13856-.09568-.12516-.0165.013-.0038.09828.04148.18223.045.08435.10251.12942.11569.11057C4.38154,3.216,4.34817,3.14617,4.30661,3.0675Z"></path>
                            <path d="M4.11919,3.041c-.0406-.08484-.07982-.13626-.09778-.10845a.29915.29915,0,0,0,.0453.21211c.04693.08725.10214.12806.1133.09809A.42083.42083,0,0,0,4.11919,3.041Z"></path>
                            <path d="M3.91446,3.01281c-.04227-.08365-.08654-.11925-.10543-.07537a.32861.32861,0,0,0,.05319.23428c.05083.08428.10567.1128.11572.06869A.46285.46285,0,0,0,3.91446,3.01281Z"></path>
                            <path d="M3.6914,2.99276c-.04644-.07741-.09741-.09334-.11672-.03345a.33259.33259,0,0,0,.06449.24942c.05614.07745.11215.08937.12164.02967A.44937.44937,0,0,0,3.6914,2.99276Z"></path>
                            <path d="M3.45,2.98318c-.0524-.06794-.11085-.06282-.13012.012a.32.32,0,0,0,.07812.259c.06244.06839.1209.0613.13012-.01352A.40682.40682,0,0,0,3.45,2.98318Z"></path>
                            <path d="M3.191,2.98244c-.05973-.05677-.12581-.03137-.1447.05647a.29937.29937,0,0,0,.09289.26432c.06945.05851.1315.03237.1408-.05692A.35579.35579,0,0,0,3.191,2.98244Z"></path>
                            <path d="M2.9192,3.00936c-.06265-.0558-.13248-.03011-.1535.05614a.28456.28456,0,0,0,.09215.26153c.07142.05889.13822.034.15057-.0551A.32873.32873,0,0,0,2.9192,3.00936Z"></path>
                            <path d="M2.63158,3.04942c-.06335-.05985-.13373-.04541-.15669.03033a.26986.26986,0,0,0,.086.25043c.07062.06375.14093.05187.15658-.02755A.30929.30929,0,0,0,2.63158,3.04942Z"></path>
                            <path d="M2.33013,3.0829c-.063-.064-.13333-.06115-.158.00379a.253.253,0,0,0,.07866.23747c.0687.0678.14124.06894.16.00037A.28761.28761,0,0,0,2.33013,3.0829Z"></path>
                            <path d="M2.01936,3.10823c-.06009-.07047-.12936-.0822-.15671-.02944a.23449.23449,0,0,0,.0645.22533c.06412.0734.13746.09067.1607.0349A.26643.26643,0,0,0,2.01936,3.10823Z"></path>
                            <path d="M1.69589,3.11759c-.05722-.07315-.12426-.09512-.15216-.05239-.0277.04262-.004.13518.05568.21037s.13122.10288.15651.058A.24082.24082,0,0,0,1.69589,3.11759Z"></path>
                            <path d="M1.36587,3.11313c-.05331-.07507-.1172-.10615-.14486-.07255-.02742.03342-.00749.11989.047.19607s.12252.11254.14885.07778S1.41915,3.18794,1.36587,3.11313Z"></path>
                            <path d="M1.033,3.096c-.04878-.07652-.10851-.1161-.13519-.09067s-.00978.10693.03923.18386c.04883.077.11181.12044.13814.09438S1.08173,3.17235,1.033,3.096Z"></path>
                            <path d="M.70132,3.06765c-.04393-.07827-.09905-.126-.12415-.10778s-.01059.09635.03308.17484.10046.128.12579.10945S.74523,3.146.70132,3.06765Z"></path>
                            <ellipse
                                cx="0.33238"
                                cy="3.0506"
                                rx="0.04742"
                                ry="0.16412"
                                transform="translate(-1.36821 0.49626) rotate(-27.43615)"
                            ></ellipse>
                        </g>
                        <g>
                            <path d="M4.23719,2.58026c-.00781-.08656-.0207-.1533-.04153-.14445-.02049.00873-.03723.0936-.02487.18464.012.09135.04475.15013.06069.1368A.36726.36726,0,0,0,4.23719,2.58026Z"></path>
                            <path d="M4.07672,2.51316c-.01129-.08922-.03406-.14532-.06013-.12046a.29867.29867,0,0,0-.02.21323c.01855.09126.05591.13986.07421.11331A.43431.43431,0,0,0,4.07672,2.51316Z"></path>
                            <path d="M3.88929,2.4588c-.01761-.08649-.05234-.12581-.08271-.08387a.31749.31749,0,0,0-.01.23457c.02689.08645.07025.11979.09114.07829A.44686.44686,0,0,0,3.88929,2.4588Z"></path>
                            <path d="M3.67628,2.42115c-.02638-.07947-.07376-.09818-.10724-.03947a.30892.30892,0,0,0,.00444.24846c.03637.07825.08644.09343.10979.03624A.41547.41547,0,0,0,3.67628,2.42115Z"></path>
                            <path d="M3.43983,2.40029c-.03667-.06939-.09664-.06579-.13174.00819A.28532.28532,0,0,0,3.33,2.6646c.04642.06789.10365.06358.129-.00869A.36484.36484,0,0,0,3.43983,2.40029Z"></path>
                            <path d="M3.18257,2.39383c-.04785-.05738-.11954-.03184-.155.05534a.25682.25682,0,0,0,.04113.25871c.05665.05677.12116.03289.14811-.05348A.3095.3095,0,0,0,3.18257,2.39383Z"></path>
                            <path d="M2.90666,2.42056c-.05219-.055-.12709-.02783-.16259.05814a.24225.24225,0,0,0,.04647.25368c.05973.05551.12823.03145.15637-.05482A.2834.2834,0,0,0,2.90666,2.42056Z"></path>
                            <path d="M2.61351,2.46625a.092.092,0,0,0-.16033.0356.23.23,0,0,0,.04764.24126.08729.08729,0,0,0,.15679-.03141A.26471.26471,0,0,0,2.61351,2.46625Z"></path>
                            <path d="M2.30914,2.51134a.08873.08873,0,0,0-.15706.01206.21763.21763,0,0,0,.04773.22773c.05855.06171.12811.05952.15564-.00746A.246.246,0,0,0,2.30914,2.51134Z"></path>
                            <path d="M1.99835,2.55389c-.05145-.06577-.11954-.07286-.15189-.01864a.20786.20786,0,0,0,.041.21636c.05513.06675.12373.07856.15242.02339A.23305.23305,0,0,0,1.99835,2.55389Z"></path>
                            <path d="M1.67817,2.58571c-.0502-.068-.11545-.08473-.14607-.04017a.19561.19561,0,0,0,.03925.20263c.05254.06861.11909.08981.14728.04444A.2143.2143,0,0,0,1.67817,2.58571Z"></path>
                            <path d="M1.35348,2.6073c-.04828-.06988-.1104-.09585-.1393-.06013s-.01255.11981.03693.19011.113.09995.14051.06379S1.40162,2.67715,1.35348,2.6073Z"></path>
                            <path d="M1.02624,2.61779C.98061,2.54581.922,2.511.895,2.53852s-.01185.10745.03432.17972.10579.10956.13224.08172S1.07186,2.68972,1.02624,2.61779Z"></path>
                            <path d="M.699,2.6163c-.04263-.07467-.0973-.11836-.12248-.0982-.025.02012-.011.09705.03166.17207S.706,2.8099.7311,2.78934.74162,2.691.699,2.6163Z"></path>
                            <ellipse
                                cx="0.33222"
                                cy="2.6261"
                                rx="0.04872"
                                ry="0.15971"
                                transform="translate(-1.28584 0.53119) rotate(-30.47155)"
                            ></ellipse>
                        </g>
                        <g>
                            <path d="M4.359,2.09983c.02614-.08686.03815-.16219.01344-.16535-.02439-.00316-.07211.07277-.09366.16591-.02192.09319-.01313.16364.0067.16067C4.3056,2.2579,4.33257,2.187,4.359,2.09983Z"></path>
                            <path d="M4.22324,1.95315c.01966-.09295.01421-.15984-.02136-.14346a.31344.31344,0,0,0-.09175.20675c-.01177.09556.008.15386.03523.13528A.42858.42858,0,0,0,4.22324,1.95315Z"></path>
                            <path d="M4.0472,1.84032c.00856-.0922-.01724-.14094-.062-.10282a.35352.35352,0,0,0-.0808.23734c.00151.09113.03438.13132.06871.09477A.46443.46443,0,0,0,4.0472,1.84032Z"></path>
                            <path d="M3.83337,1.76722c-.00585-.08514-.05261-.10893-.10373-.04927a.34217.34217,0,0,0-.06226.25646c.01639.08127.06281.09959.10339.04414A.43688.43688,0,0,0,3.83337,1.76722Z"></path>
                            <path d="M3.58644,1.73358c-.02216-.073-.08837-.06859-.14311.01036a.29989.29989,0,0,0-.03826.26491c.03167.068.09108.0628.13636-.01082A.37394.37394,0,0,0,3.58644,1.73358Z"></path>
                            <path d="M3.31216,1.73427c-.03892-.05777-.122-.02517-.17738.0695a.25071.25071,0,0,0-.01119.26519c.04647.05341.11773.02482.166-.06548A.302.302,0,0,0,3.31216,1.73427Z"></path>
                            <path d="M3.01156,1.78509c-.04536-.0528-.13092-.01558-.18342.07867a.22944.22944,0,0,0,.0026.2578c.05139.05011.12586.01868.17268-.07284A.26916.26916,0,0,0,3.01156,1.78509Z"></path>
                            <path d="M2.69208,1.86635c-.04714-.054-.12781-.02645-.17465.05727a.21547.21547,0,0,0,.01289.24347c.05195.05259.1247.031.16673-.05141A.24655.24655,0,0,0,2.69208,1.86635Z"></path>
                            <path d="M2.36492,1.952c-.0482-.056-.12419-.03971-.16582.03264a.203.203,0,0,0,.02132.2284.093.093,0,0,0,.16046-.02718A.22682.22682,0,0,0,2.36492,1.952Z"></path>
                            <path d="M2.03562,2.03541a.08937.08937,0,0,0-.15579-.001.19724.19724,0,0,0,.02159.21672c.04967.06147.11748.06521.15285.00574A.21765.21765,0,0,0,2.03562,2.03541Z"></path>
                            <path d="M1.70171,2.10521c-.04646-.06431-.11321-.07466-.14764-.026a.18686.18686,0,0,0,.02638.20235c.04856.06423.1136.07858.14589.02983A.20133.20133,0,0,0,1.70171,2.10521Z"></path>
                            <path d="M1.36712,2.1587c-.04572-.067-.10871-.0884-.13976-.04992a.17936.17936,0,0,0,.02943.18963c.04694.06715.109.09163.13871.053A.18937.18937,0,0,0,1.36712,2.1587Z"></path>
                            <path d="M1.0332,2.1926C.98886,2.12244.92964,2.09018.90155,2.11913s-.014.10882.03087.17942.10353.10475.13094.07528S1.07749,2.26262,1.0332,2.1926Z"></path>
                            <path d="M.70157,2.20347c-.04227-.07413-.09746-.11732-.123-.09709s-.01161.09744.03078.17233.09714.11872.12252.09763S.74382,2.27762.70157,2.20347Z"></path>
                            <ellipse
                                cx="0.33231"
                                cy="2.21043"
                                rx="0.04807"
                                ry="0.16199"
                                transform="translate(-1.02419 0.43382) rotate(-28.81313)"
                            ></ellipse>
                        </g>
                        <g>
                            <path d="M4.67228,1.69491c.06015-.07767.09666-.1606.06765-.18124-.02864-.02059-.107.03882-.16176.12719-.05519.08847-.07036.16537-.04708.17543C4.55475,1.82616,4.6118,1.7729,4.67228,1.69491Z"></path>
                            <path d="M4.55818,1.4469c.04934-.0944.05941-.17641.01366-.17318-.04549.00317-.12148.09382-.16152.19284-.04025.0993-.03651.16717-.00029.15958C4.4464,1.61819,4.5086,1.54159,4.55818,1.4469Z"></path>
                            <path d="M4.3851,1.25006c.03255-.10062.01291-.16522-.0469-.13353a.40863.40863,0,0,0-.14853.243c-.02123.099.00364.14857.05195.11924A.47548.47548,0,0,0,4.3851,1.25006Z"></path>
                            <path d="M4.15808,1.11671c.01164-.09629-.0377-.13121-.10758-.07078a.41865.41865,0,0,0-.125.27488c-.00037.08957.04573.11424.10437.061A.48419.48419,0,0,0,4.15808,1.11671Z"></path>
                            <path d="M3.88536,1.04888c-.01113-.08324-.08747-.08216-.16309.004a.36527.36527,0,0,0-.09411.2893c.02075.07409.08649.07042.15267-.00622A.42871.42871,0,0,0,3.88536,1.04888Z"></path>
                            <path d="M3.57674,1.04008c-.03406-.06438-.13288-.0266-.20991.08a.2893.2893,0,0,0-.05883.2898c.04047.05578.12334.02341.19418-.07452A.34245.34245,0,0,0,3.57674,1.04008Z"></path>
                            <path d="M3.23268,1.10491c-.04256-.05606-.14353-.00912-.21506.09846-.07158.1073-.08423.23-.03725.28.04724.05.13288.01158.20016-.08992C3.24751,1.29222,3.27546,1.16093,3.23268,1.10491Z"></path>
                            <path d="M2.86718,1.21741c-.04482-.05514-.13774-.0168-.19946.07917a.23171.23171,0,0,0-.01881.26186c.04836.05123.12932.02168.18767-.0706A.26594.26594,0,0,0,2.86718,1.21741Z"></path>
                            <path d="M2.49747,1.34338c-.04626-.05563-.13159-.02915-.18439.0538a.21136.21136,0,0,0-.0027.24254c.049.05335.12528.03449.17534-.04608A.23651.23651,0,0,0,2.49747,1.34338Z"></path>
                            <path d="M2.13075,1.47055a.09809.09809,0,0,0-.16814.017.20254.20254,0,0,0,.00377.22758.09323.09323,0,0,0,.16185-.01077A.22286.22286,0,0,0,2.13075,1.47055Z"></path>
                            <path d="M1.7656,1.58323a.0915.0915,0,0,0-.15615-.01093.187.187,0,0,0,.01483.20929c.04674.06191.11353.07023.15161.01583A.20067.20067,0,0,0,1.7656,1.58323Z"></path>
                            <path d="M1.40611,1.67533c-.045-.06507-.11133-.0809-.14565-.038a.17624.17624,0,0,0,.023.19331c.04606.0649.10915.08462.14234.04182A.18533.18533,0,0,0,1.40611,1.67533Z"></path>
                            <path d="M1.05336,1.741C1.009,1.67265.94747,1.64445.91756,1.6761S.901,1.788.94582,1.85671s.10424.09937.13356.06726S1.09776,1.80915,1.05336,1.741Z"></path>
                            <path d="M.70884,1.77435C.66608,1.70167.60942,1.66066.58316,1.68208s-.01238.09841.03042.1722.09818.11554.12438.093S.75158,1.847.70884,1.77435Z"></path>
                            <ellipse
                                cx="0.33267"
                                cy="1.79162"
                                rx="0.04838"
                                ry="0.16208"
                                transform="matrix(0.87629, -0.48178, 0.48178, 0.87629, -0.82202, 0.38191)"
                            ></ellipse>
                        </g>
                    </g>
                </g>
                <g
                    transform="matrix(4,0,0,4,117,-11)"
                    fill="url(#LogoGradient)"
                >
                    <path d="M9.4238 12.1094 c0.35156 0.83008 0.53711 1.7285 0.54688 2.6855 l-0.0097656 5.2148 l-1.3379 0 l0 -4.9219 c0 -0.86914 -0.068359 -1.6309 -0.21484 -2.2852 c-0.14648 -0.64453 -0.41016 -1.1426 -0.79102 -1.4844 c-0.39063 -0.3418 -0.9668 -0.51758 -1.7188 -0.51758 c-0.55664 0 -1.0352 0.14648 -1.4453 0.42969 c-0.41992 0.2832 -0.72266 0.61523 -0.92773 0.98633 l0 7.793 l-1.3379 0 l0 -9.8145 l1.3379 0 l0 0.83008 c0.64453 -0.55664 1.5234 -0.83008 2.627 -0.83008 c1.1914 0 2.1094 0.36133 2.7441 1.084 c0.22461 0.24414 0.40039 0.52734 0.52734 0.83008 z  M13.916040625 19.19922 c0.77148 -0.068359 1.4453 -0.30273 2.0313 -0.72266 s0.87891 -0.75195 0.87891 -1.0059 l0 -0.068359 c0 -0.22461 0.058594 -0.45898 0.16602 -0.68359 s0.19531 -0.40039 0.26367 -0.53711 c0.10742 -0.21484 0.16602 -0.38086 0.16602 -0.49805 c0 -0.26367 -0.21484 -0.43945 -0.64453 -0.53711 c-0.5957 -0.17578 -1.1914 -0.26367 -1.7969 -0.26367 c-1.2207 0 -2.0703 0.3125 -2.5391 0.94727 c-0.3418 0.45898 -0.51758 0.92773 -0.51758 1.3867 c0 0.79102 0.26367 1.3379 0.79102 1.6406 c0.38086 0.22461 0.78125 0.3418 1.2012 0.3418 z M18.007840625 17.3437 l0 1.4648 c0 0.38086 0.21484 0.67383 0.64453 0.86914 l0.3418 0.10742 c-0.44922 0.13672 -0.81055 0.20508 -1.084 0.20508 c-0.39063 0 -0.67383 -0.097656 -0.84961 -0.29297 c-0.15625 -0.16602 -0.24414 -0.44922 -0.26367 -0.84961 c0.43945 -0.44922 0.83984 -0.94727 1.2109 -1.5039 z M20.019640625 14.2773 c-0.92773 1.5137 -2.0313 2.9688 -3.291 4.375 c-0.26367 0.30273 -0.68359 0.58594 -1.25 0.86914 c-0.61523 0.3125 -1.3184 0.46875 -2.1094 0.46875 c-1.4551 0 -2.3633 -0.5957 -2.7148 -1.7871 c-0.087891 -0.29297 -0.13672 -0.60547 -0.13672 -0.94727 c0 -0.64453 0.29297 -1.2793 0.87891 -1.9043 c0.57617 -0.61523 1.5918 -0.98633 3.0371 -1.1035 l0.32227 -0.0097656 c0.74219 0 1.416 0.097656 2.0215 0.2832 c0 -0.25391 -0.019531 -0.49805 -0.048828 -0.73242 c-0.15625 -1.6211 -0.74219 -2.5879 -1.7676 -2.9004 l-0.16602 -0.0097656 c-0.11719 0 -0.25391 0.029297 -0.41992 0.087891 c-0.16602 0.068359 -0.92773 0.53711 -2.2852 1.416 l-1.0352 -0.9375 c0.57617 -0.37109 0.9668 -0.61523 1.1719 -0.72266 c0.69336 -0.36133 1.3477 -0.53711 1.9629 -0.53711 c0.26367 0 0.60547 0.039063 1.0449 0.12695 l0.029297 0 c0.9375 0.2832 1.6309 0.85938 2.0801 1.709 c0.43945 0.85938 0.66406 1.8652 0.66406 3.0273 l0 1.0938 c0.45898 -0.75195 1.1426 -1.7871 2.0508 -3.1055 l0 -2.8418 l1.3379 0 l0 0.83008 c0.64453 -0.55664 1.5234 -0.83008 2.627 -0.83008 c1.1914 0 2.1094 0.36133 2.7441 1.084 c0.22461 0.24414 0.40039 0.52734 0.52734 0.83008 c0.35156 0.83008 0.53711 1.7285 0.54688 2.6855 l-0.0097656 5.2148 l-1.3379 0 l0 -4.9219 c0 -0.86914 -0.068359 -1.6309 -0.21484 -2.2852 c-0.14648 -0.64453 -0.41016 -1.1426 -0.79102 -1.4844 c-0.39063 -0.3418 -0.9668 -0.51758 -1.7188 -0.51758 c-0.55664 0 -1.123 0.17578 -1.709 0.51758 c-0.5957 0.35156 -1.2695 1.3379 -2.041 2.959 z M21.396640625 12.314499999999999 l0 7.6953 l-1.3379 0 l0 -5.3516 c0.46875 -0.9668 0.9082 -1.748 1.3379 -2.3438 z M36.22074375 19.9902344 c-0.39063 0 -0.67383 -0.097656 -0.84961 -0.29297 c-0.17578 -0.18555 -0.26367 -0.56641 -0.26367 -1.123 c-0.26367 0.32227 -0.70313 0.64453 -1.3184 0.94727 c-0.61523 0.3125 -1.3184 0.46875 -2.1094 0.46875 c-1.4551 0 -2.3633 -0.5957 -2.7148 -1.7871 c-0.087891 -0.29297 -0.13672 -0.60547 -0.13672 -0.94727 c0 -0.64453 0.29297 -1.2793 0.87891 -1.9043 c0.57617 -0.61523 1.5918 -0.98633 3.0371 -1.1035 l0.32227 -0.0097656 c0.74219 0 1.416 0.097656 2.0215 0.2832 c0 -0.25391 -0.019531 -0.49805 -0.048828 -0.73242 c-0.15625 -1.6211 -0.74219 -2.5879 -1.7676 -2.9004 l-0.16602 -0.0097656 c-0.11719 0 -0.25391 0.029297 -0.41992 0.087891 c-0.16602 0.068359 -0.92773 0.53711 -2.2852 1.416 l-1.0352 -0.9375 l0.85938 -0.55664 l0.3125 -0.16602 c0.69336 -0.36133 1.3477 -0.53711 1.9629 -0.53711 c0.26367 0 0.60547 0.039063 1.0449 0.12695 l0.029297 0 c0.9375 0.2832 1.6309 0.85938 2.0801 1.709 c0.43945 0.85938 0.66406 1.8652 0.66406 3.0273 l0 3.7598 c0 0.38086 0.21484 0.67383 0.64453 0.86914 l0.3418 0.10742 l-0.22461 0.068359 c-0.3418 0.087891 -0.625 0.13672 -0.85938 0.13672 z M32.46094375 19.17969 c0.67383 -0.097656 1.2793 -0.33203 1.7969 -0.70313 c0.58594 -0.41992 0.87891 -0.75195 0.87891 -1.0059 l0 -0.068359 c0 -0.22461 0.048828 -0.45898 0.15625 -0.68359 s0.20508 -0.40039 0.27344 -0.53711 c0.10742 -0.21484 0.16602 -0.38086 0.16602 -0.49805 c0 -0.26367 -0.21484 -0.43945 -0.64453 -0.53711 c-0.5957 -0.17578 -1.1914 -0.26367 -1.7969 -0.26367 c-1.2207 0 -2.0703 0.3125 -2.5391 0.94727 c-0.3418 0.45898 -0.51758 0.92773 -0.51758 1.3867 c0 0.79102 0.26367 1.3379 0.79102 1.6406 c0.38086 0.22461 0.78125 0.3418 1.2012 0.3418 z M37.97851625 20.087891 l-0.67383 0 c0.048828 -0.087891 1.6797 -4.8047 4.873 -14.131 l1.416 0 l4.4043 14.063 l-1.377 0 l-1.1035 -3.5059 l-6.3086 0 z M45.32225625 15.9082 l-2.832 -8.9746 l-3.0762 8.9746 l5.9082 0 z M51.757853125 20.048828 l-1.3379 0 l0 -14.053 l1.3379 0 l0 14.053 z"></path>
                </g>
            </>
        </svg>
    );
}
