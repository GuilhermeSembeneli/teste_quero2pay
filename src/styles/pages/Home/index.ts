import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6rem 0px;
`;

export const SectionHome = styled.section`
    margin: auto 0px;
    width: 90%;

    @media screen and (min-width: 1024px) {
        margin: 3rem 0px auto;
        max-width: 1024px;
        width: 90%;
    }
`;

export const BestAverages = styled.article`

    .create-title-decoration {
        display: flex;
        align-items: center;
        gap: .3rem;
        p {
            font-weight: bold;
            font-size: 1.375rem;
            line-height: 2.063rem;
            color: var(--color-primary);
        }
        span {
            display: block;
            width: 3px;
            height: 1.25rem;
            border-radius: 4px;
            background: var(--color-primary);
        }
    }

    .container-movies-averages {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-top: 1rem;
    }
`;

