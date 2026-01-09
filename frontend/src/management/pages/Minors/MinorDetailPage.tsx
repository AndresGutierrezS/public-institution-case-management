import { minorsMock } from "../../../mocks/minor.model.mock"
import { MinorProfile } from "../../components/MinorProfile"
import { MinorSummaryCard } from "../../components/MinorSummaryCard"

export const MinorDetailPage = () => {
    const minors = minorsMock;

    return (
        <>
            <MinorSummaryCard minor={minors[0]}/>
            <MinorProfile />
        </>
    )
}