"use client";

import { useEffect, useState } from "react";
import Container from "../container";
import Heading from "../heading";
import axios from "axios";

const GithubContributionSection = () => {
  const [contributionSvg, setContributionSvg] = useState<string>("");
  // TODO: use tanstack query for fetching with caching
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const username = "rajmane84";
  const apiUrl = `/api/github-contributions?username=${username}`;

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiUrl);
        setContributionSvg(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [apiUrl]);

  return (
    <>
      <Container innerClassName="px-4 py-2">
        <Heading
          heading="GitHub"
          description="My contributions and activity."
        />
      </Container>
      <Container innerClassName="p-4">
        <div className="flex flex-col items-center gap-4">
          {loading && (
            <p className="text-neutral-600 dark:text-neutral-400">
              Loading contributions...
            </p>
          )}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && !error && contributionSvg && (
            <div
              className="contribution-chart w-full"
              dangerouslySetInnerHTML={{ __html: contributionSvg }}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default GithubContributionSection;
