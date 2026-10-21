import { AuctionSearchResultResponse } from "@/utils/types/search/search";

// 백엔드 정렬 기준(AuctionSortOption)의 enum 이름을 보낸다.
const SORT_OPTION: { [key: string]: string } = {
  최신순: "CREATED",
  "북마크 많은순": "BOOKMARK",
  "마감 임박순": "END_DATE",
  "마감일 임박순": "END_DATE", // 정렬 드롭다운(SearchHeader)의 표기
  "입찰수 많은순": "BIDDING"
};

export const getSearchResults = async (
  pageParam: number,
  keyword: string,
  sortOption: string,
  searchRecord?: Record<string, string | number | null>
): Promise<AuctionSearchResultResponse> => {
  const newRecord = searchRecord ? { ...searchRecord } : {};
  newRecord["keyword"] = keyword.slice(8);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/search?page=${pageParam.toString()}&size=5&sort=${SORT_OPTION[sortOption]}`,
    {
      method: "POST",
      body: JSON.stringify(newRecord),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const result = await response.json();
  return result;
};
