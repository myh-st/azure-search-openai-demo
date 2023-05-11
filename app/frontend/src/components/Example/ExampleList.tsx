import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How the AI help to improve the customer experience in the contact center solutions?",
        value: "How the AI help to improve the customer experience in the contact center solutions?"
    },
    { text: "How to apply the data analytics to understand customer need?", value: "How to apply the data analytics to understand customer need?" },
    { text: "How the ChatGPT help driving the sales revenue in company?", value: "How the ChatGPT help driving the sales revenue in company?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
