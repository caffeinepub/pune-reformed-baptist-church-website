import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Sermon } from '@/backend';

export function useGetAllSermons() {
  const { actor, isFetching } = useActor();

  return useQuery<Sermon[]>({
    queryKey: ['sermons'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSermons();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetSermonById(id: number) {
  const { actor, isFetching } = useActor();

  return useQuery<Sermon | null>({
    queryKey: ['sermon', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getSermonById(id);
    },
    enabled: !!actor && !isFetching && id > 0,
  });
}

export function useGetServiceInfo() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['serviceInfo'],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getServiceInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
}
