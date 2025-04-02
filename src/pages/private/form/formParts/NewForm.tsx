import { useState } from 'react';
import { Topic } from '../../../../components/topic/Topic';

export const NewForm = () => {
    const [openTopic, setOpenTopic] = useState<string | null>(null);

    const handleTopicClick = (topicName: string) => {
        setOpenTopic(openTopic === topicName ? null : topicName);
    };

    const topics = [
        { name: "EXPERIÊNCIA", finished: true },
        { name: "IMÓVEL", finished: false },
        { name: "LAVABO E HALL DE ENTRADA", finished: false },
        { name: "SALA DE ESTAR E JANTAR", finished: true },
        { name: "COZINHA", finished: false },
        { name: "LAVANDERIA", finished: false },
        { name: "BANHEIRO", finished: true },
        { name: "SUÍTE MASTER", finished: true },
        { name: "SUÍTE FILHOS", finished: false },
        { name: "HÓSPEDES/HOME OFFICE", finished: true },
        { name: "GERAL", finished: false },
        { name: "ESTILO E MOODS", finished: true },
        { name: "CONTEXTO", finished: false }
    ];

    return (
        <main className="ml-5 mr-5">
            {topics.map((topic) => (
                <Topic
                    key={topic.name}
                    topicName={topic.name}
                    finished={topic.finished}
                    isOpen={openTopic === topic.name}
                    onToggle={() => handleTopicClick(topic.name)}
                />
            ))}
        </main>
    );
};