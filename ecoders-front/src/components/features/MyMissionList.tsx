import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { styled } from "styled-components";


// interface MyMissionListProps {

// }

function MyMissionList () {
    const myMissions = useSelector((state: RootState) => state.missions.myMissions);

    return (
        <Container>
            <MissionList>
                {myMissions.map((mission) => (
                    <Mission key={mission.id}>{mission.text}</Mission>
                ))}
            </MissionList>
        </Container>
    )
}

export default MyMissionList;

const Container = styled.div`
`;

const MissionList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
`;

const Mission = styled.li`
    width: 300px;
    height: 30px;
    padding: 30px 20px;
    background-color: #D4E2F1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
`