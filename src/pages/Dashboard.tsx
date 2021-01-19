import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../components/PageHeader";
import ListItem from "../components/ui/ListItem";
import { RootState } from "../store";
import SpaceNewsActions from "../store/actions/spaceNewsActions";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();

  const { spaceNews } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(SpaceNewsActions.getUserProfile({ limit: 3 }));
  }, [dispatch]);

  return (
    <div>
      <PageHeader title="Dashboard" />
      <div style={{ padding: 10 }}>
        <div style={{ paddingBottom: 20 }}>
          <h3 style={{ margin: 0 }}>Space Flight News from API</h3>
          <span>API: https://test.spaceflightnewsapi.net/api/v2/articles</span>
        </div>
        {spaceNews.news &&
          spaceNews.news.map((item: any) => {
            return (
              <ListItem
                key={item.id}
                title={item.title}
                thumbnail={item.imageUrl}
                subtitle={item.publishedAt}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DashboardPage;
