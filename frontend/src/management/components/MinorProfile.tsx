import { minorProfileSections } from "../data/minorProfile.data"
import { ProfileSection } from "./ProfileSection"



export const MinorProfile = () => {
  return (
    <>  
      {
        minorProfileSections.map((section) => (
          <ProfileSection 
            key={section.title}
            title={section.title} 
            fields={section.fields}
          />
        ))
      }
    </>
  )
}
