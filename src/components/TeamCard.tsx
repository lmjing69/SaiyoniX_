interface TeamCardProps {
    name: string;
    role: string;
    responsibilities: string;
    skills: string[];
}

export default function TeamCard({
    name,
    role,
    responsibilities,
    skills,
}: TeamCardProps) {
    return (
        <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition">
            {/* Name */}
            <h3 className="text-xl font-semibold text-white mb-1">
                {name}
            </h3>

            {/* Role */}
            <p className="text-cyan-400 text-sm font-medium mb-3">
                {role}
            </p>

            {/* Responsibilities */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {responsibilities}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-gray-900 text-cyan-400 rounded-full border border-gray-800"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
