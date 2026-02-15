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
        <div className="border border-slate-300 rounded-xl p-6 hover:border-blue-500 transition bg-white shadow-md hover:shadow-lg">
            {/* Name */}
            <h3 className="text-xl font-bold text-slate-900 mb-1">
                {name}
            </h3>

            {/* Role */}
            <p className="text-blue-700 text-sm font-semibold mb-3">
                {role}
            </p>

            {/* Responsibilities */}
            <p className="text-slate-700 text-sm leading-relaxed mb-4 font-medium">
                {responsibilities}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-slate-100 text-blue-800 font-semibold rounded-full border border-slate-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
