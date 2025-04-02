import { useEffect, useState } from "react";
import { TitleForPrivateRoutes } from "../../../components/titles/TitleForPrivateRoutes";
import { Topic } from "../../../components/topic/Topic";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useInformation } from "../../../hooks/useInformation";

export const Information = () => {
    const [openTopic, setOpenTopic] = useState<string | null>(null);
    const location = useLocation();
    const { customer, residents, socialMedias } = useInformation()

    useEffect(() => {
        if(location.state?.success === true) {
            toast.success(location.state?.message);
        } else if(location.state?.success === false) {
            toast.error(location.state?.message);
        }

    }, [location]);

    const handleTopicClick = (topicName: string) => {
        setOpenTopic(openTopic === topicName ? null : topicName);
    };

    const topics = [
        { name: "Informações dos Clientes", finished: false, formRoute: "/customer-info", data: customer, editRoute: "/customer-info/edit" },
        { name: "Informações dos Moradores", finished: false, formRoute: "/resident-info", data: residents, dataName: "Moradores", editRoute: "/resident-info/edit" },
        { name: "Informações das Redes Sociais", finished: false, formRoute: "/social-media-info", data: socialMedias, dataName: "Redes Sociais", editRoute: "/social-media-info/edit" }
    ];

    return (
        <main>
            <ToastContainer />
            <TitleForPrivateRoutes title="Informações Gerais" />
            <div className="ml-5 mr-5">
                {topics.map((topic) => (
                    <Topic
                        key={topic.name}
                        topicName={topic.name}
                        finished={topic.data ? true : false}
                        isOpen={openTopic === topic.name}
                        onToggle={() => handleTopicClick(topic.name)}
                        formRoute={topic.formRoute}
                        dataName={topic.dataName}
                        data={topic.data}
                        editRoute={topic.editRoute}
                    />
                ))}
            </div>
        </main>
    );
};