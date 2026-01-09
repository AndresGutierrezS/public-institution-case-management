import { ProfileField } from "./ProfileField";

interface Field {
    label: string;
    value: string;
}

interface Props {
    title: string;
    fields: Field[];
}

export const ProfileSection = ({title, fields}: Props) => {

    return (
        <section className="bg-white mb-6 shadow-sm rounded-b-lg border-collapse">
            <div className="bg-(--color-principal) text-white px-4 py-3 rounded-t-lg border-collapse">
                <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="px-4 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        fields.map(field => (
                            <ProfileField 
                                key={field.label}
                                label={field.label} 
                                value={field.value}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}