import styled from 'styled-components';

export const StyledHeader = styled.nav`
    position: fixed;
    z-index: 998;
    width: 100%;
    height: 166.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${
        ({pathname}) =>
            (pathname === '/') ? `var(--deep-depression-cherry)` : `var(--black-carbon)`
    };
    font-size: 1rem;

    .nav-item {
        position: relative;
        margin-left: 1.3333rem;
        padding: calc(17rem / 22.95) 0rem;
    }

    .nav-item:first-of-type {
        margin: 0;
    }

    .nav-item:first-child {
        margin-left: 1.3333rem;
    }

    .nav-title {
        color: var(--blkswn-rose);
        font-weight: 600;
    }

    .nav-link {
        color: var(--white);
        opacity: 0.75;
        font-weight: 500;
        white-space: nowrap;
    }

    .active-link, .nav-link:hover {
        opacity: 1;
    }

    .nav-dropdown {
        position: absolute;
        z-index: 998;
        display: flex;
        column-gap: 1.3333rem;
        padding: calc(17rem / 22.95) 0;
        left: 50%;
        transform: translateX(-50%); // center horizontally
    }

    .nav-dropdown-last {
        transform: revert;
        justify-content: flex-end;
        left: auto;
        right: 0;
    }

    .nav-dropdown-first {
        transform: revert;
        justify-content: flex-start;
        left: 0;
    }

    .nav-dropdown-link {
        padding: 0;
    }

    > * {
        &:first-child {
            display: flex;
            align-items: center;
            margin-left: calc(55rem * 0.9 / 22.95);
            > * {
                &:first-child {
                    min-width: calc(168.1396rem / 22.95);
                    margin-right: calc(34rem * 0.9 / 22.95);
                }
            }
        }
        &:last-child {
            margin-right: calc(55rem * 0.9 / 22.95);
        }
    }
`;