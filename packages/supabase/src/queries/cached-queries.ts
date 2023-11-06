import { unstable_cache } from "next/cache";
import { createClient } from "../client/server";
import {
  getBankConnectionsByTeamIdQuery,
  getMetricsQuery,
  getSpendingQuery,
  getTeamBankAccountsQuery,
  getTeamMembersQuery,
  getTransactionsQuery,
  getUserQuery,
} from "../queries";

export const getTransactions = async (params) => {
  const supabase = createClient();
  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getTransactionsQuery(supabase, { ...params, teamId });
    },
    [`transactions-${teamId}`],
    {
      tags: [`transactions-${teamId}`],
    },
  )(params);
};

export const getUser = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  const userId = data.session?.user.id;

  if (!userId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getUserQuery(supabase, userId);
    },
    [`user-${userId}`],
    {
      tags: [`user-${userId}`],
    },
  )(userId);
};

export const getBankConnectionsByTeamId = async () => {
  const supabase = createClient();
  const user = await getUser();
  const userId = user?.data?.id;

  if (!userId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getBankConnectionsByTeamIdQuery(supabase, userId);
    },
    [`user-${userId}`],
    {
      tags: [`user-${userId}`],
    },
  )(userId);
};

export const getTeamBankAccounts = async () => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getTeamBankAccountsQuery(supabase, teamId);
    },
    [`bank-accounts-${teamId}`],
    {
      tags: [`bank-accounts-${teamId}`],
    },
  )(teamId);
};

export const getTeamMembers = async () => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getTeamMembersQuery(supabase, teamId);
    },
    [`bank-members-${teamId}`],
    {
      tags: [`bank-members-${teamId}`],
    },
  )(teamId);
};

export const getSpending = async (params) => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getSpendingQuery(supabase, { ...params, teamId });
    },
    [`spending-${teamId}`],
    {
      tags: [`spending-${teamId}`],
    },
  )(params);
};

export const getMetrics = async (params) => {
  const supabase = createClient();

  const user = await getUser();
  const teamId = user?.data?.team_id;

  if (!teamId) {
    return null;
  }

  return unstable_cache(
    async () => {
      return getMetricsQuery(supabase, { ...params, teamId });
    },
    [`metrics-v2-${teamId}`],
    {
      tags: [`metrics-${teamId}`],
      revalidate: 10,
    },
  )(params);
};
