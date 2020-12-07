import styled, { css } from 'styled-components';
import { LocationOn , Cake } from '../../styles/Icons';
import Button from '../Button';
import perfil from '../../img/perfil.png';
import code from '../../img/code.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink:0;

    width: 100%;
    height: min(33vw, 199px);

    background-image: url(${code});
    background-repeat: no-repeat;
    background-size: 600px 250px;

    /* background: var(--twitter); */
    position: relative;
`;
export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    /* background: var(--gray); */
    background-image: url(${perfil});
    background-repeat: no-repeat;
    background-size: 128px 160px;
    /* background-position: center; */
    /* background-position-y: 50px; */
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
    
`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px),67px) 16px 0;
    display: flex;
    flex-direction: column;

    position: relative;

    > h1{
        font-weight: bold;
        font-size: 19px;
    }

    > h2 {
        font-weight: normal;
        font-size: 15px;

        color: var(--gray);
    }

    > p {
        font-size: 15px;
        margin-top: 11px;
    }

    > a {
        text-decoration: none;
        color: var(--twitter);

    }

    > ul{
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        > li{
            display: flex;
            align-items: center;
            font-size: 15px;
            color: var(--gray);

            > svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
`;
export const Edit = styled.div``;

const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`${iconCSS}`;
export const CakeIcon = styled(Cake)`${iconCSS}`;


export const Followage = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: var(--gary);

        & + span {
            margin-left: 20px;
        }


    }


`;


export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media(min-width: 320px){
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

`;

// 48.09