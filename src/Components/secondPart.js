import { useMediaQuery } from 'react-responsive';
export default function SecondParagraph(){{
    const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
    return<>
    <main className={isMobile ? 'flex flex-col customDesign' : 'flex flex-row customDesign'}>
        <div className = "flex-auto customNavBox">
        <button class="btn btn-outline btn-info customNavButton">Info</button>
            </div>
        <div className = "flex-auto customNavBox">
        <button class="btn btn-outline btn-info">Info</button>
        </div>
        <div className = "flex-auto customNavBox">About Me</div>

    </main>
    </>
}}