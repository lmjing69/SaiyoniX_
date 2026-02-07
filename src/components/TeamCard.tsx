interface TeamCardProps {
    name: string;
    role: string;
    image: string;
    responsibilities: string;
    skills: string[];
}

export default function TeamCard({
    name,
    role,
    image,
    responsibilities,
    skills,
}: TeamCardProps) {
    return (
        <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition">
            {/* Team Member Image */}
            <div className="w-24 h-24 rounded-full bg-gray-800 mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

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
