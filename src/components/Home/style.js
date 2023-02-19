import styled from "styled-components";
import img from '../../assets/ondas2.jpg'

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('${img}') no-repeat center;
    background-size: cover;
    gap: 20px;
    
    
    .infoClima{
        position: relative;
        p{
            margin: 20px 0;
            color: #fff;
            text-align: center;
        }
        h1{
            color: #fff;
            text-align: center;
        }
        background: rgba(0 , 0, 0, 0.1);
        backdrop-filter: blur(3px);
        padding: 50px;
        border-radius: 10px;
        
   }

    form{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        margin: 0 auto;

        button{

            position: absolute;
            left: 90.5%;
            cursor: pointer;    
            background: transparent ;
            border: none;
            
            svg{
                width: 18px;
                height: auto;
            }
        }

      
    }
    ul{
    width: 300px;
    margin: 0 auto;
    padding-top: 10px;
    border: 1px solid #000;
    border-top: none;
    list-style: none;
    margin-top: -5px;
    border-radius: 0 0 10px 10px;
    display: ${props => props.listOpen ? 'block' : 'none'};
   
    }

    li{
    padding: 5px 0;
    padding-left: 10px;
    cursor: pointer;
    color: #fff;

    &:hover{
        background: #c6c6c6;    
        color:#000 ;
    }
    }
    
`

export const Input = styled.input`
    width: 300px;
    height: 35px;
    padding: 5px 5px 5px 10px;
    font-weight: 500;
    font-size: 17px;
    border: 1px solid #000;
    border-bottom: ${props => props.borderOpen.length >  0 ? 'none' : ' 1px solid #000'};
    outline: none;    
    background: transparent;
    border-radius: ${props => props.borderOpen.length >  0 ? '10px 10px 0 0' : '10px'};
    color: #fff;
    ::placeholder{
        color: #fff;
    }
`

