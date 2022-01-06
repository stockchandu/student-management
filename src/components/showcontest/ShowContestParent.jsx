import { ShowContest } from "./ShowContest"
import { ContestFilter } from "./ContestFilter"
export const ShowContestParent = () => {
  return (
    <>
      <ContestFilter/>
      <ShowContest />
    </>
  )
}