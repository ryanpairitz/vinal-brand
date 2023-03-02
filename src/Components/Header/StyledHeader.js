import styled from 'styled-components';

export const StyledHeader = styled.nav`
    position: fixed;
    width: 100%;
    height: 166.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${
        ({pathname}) =>
            (pathname == '/') ? `var(--deep-depression-cherry)` : `var(--black-carbon)`
    };
    font-size: 1rem;

    > * {
        &:first-child {
            display: flex;
            align-items: center;
            margin-left: calc(55rem * 0.9 / 22.95);
            color: var(--blkswn-rose);
            > * {
                &:first-child {
                    // need this to ensure logo is centered vertically
                    line-height: 0;
                    min-width: 168.1396px;
                    margin-right: calc(34rem * 0.9 / 22.95);
                }
                text-align: left;
            }
        }
        &:last-child {
            margin-right: calc(55rem * 0.9 / 22.95);
        }
    }
`;