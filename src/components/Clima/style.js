import styled from "styled-components";

export const Climate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0 , 0, 0, 0.1);
    backdrop-filter: blur(3px);
    padding: 30px;
    border-radius: 10px;
    h2{
        color: #fff;
    }

    .temperature{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        
        img{
            image-rendering: pixelated;
            width: 120px;
            height: auto;
        }
        p{
            font-weight: 500;
             font-size: 34px;
             color: #e8ff8b;

        }
    }
    div:last-child{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
        p{
            font-weight: 500;
            font-size: 17px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            svg{
                width: 30px;
                height: auto;
                color: #c6c6c6;
            }
        }
        p:nth-child(1){
            text-transform: uppercase;
        }
    }

`