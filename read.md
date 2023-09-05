.account_burger{
    display: none;
    position: fixed;
    left: 0;
    top: 62px;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: rgba(31, 34, 41, 0.95);
    .account_link{
        padding: 12px 23px;
        width: 100%;
        border-radius: 0px 0px 15.941px 15.941px;
        background: linear-gradient(134deg, rgba(31, 34, 41, 0.00) 31.52%, #3561FF 117.7%), rgba(0, 0, 0, 0.80);
        backdrop-filter: blur(12.619924545288086px);
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: start;
        .account_menu{
            display: flex;
            align-items: center;
        }
        .account_item{
            color: #FFF;
            font-family: 'Golos Text VF',sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 23.911px; /* 99.631% */
            letter-spacing: 0.48px;
            padding-bottom: 14px;
            width: 100%;
            margin-bottom: 20px;
            border-bottom: 1px solid #494C53;
            svg{
                margin-right: 14px;
                path{
                    stroke-width: 1.328px;
                    stroke: #FFF;
                    opacity: 0.8;
                }
            }
            h6{
                color: #fff;
                font-family: 'Golos Text VF',sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 21.383px; /* 118.797% */
            }
            p{
                color: #fff;
                font-family: 'Golos Text VF',sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 21.383px; /* 152.739% */
            }
        }
        .account_item_active{
            color: #3561FF;
            svg{
                path{
                    stroke-width: 1.328px;
                    stroke: #3561FF;
                    opacity: 0.8;                    
                }
            }
        }
    }
    .account_network{
        display: flex;
        align-items: center;
        gap: 60px;
        margin-top: 80px;
    }
}