import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
    title: "Our Projects",
    description: "Discover the projects and platforms built by SaiyoniX, showcasing our expertise in secure and scalable technology.",
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}
