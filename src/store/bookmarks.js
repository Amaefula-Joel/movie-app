import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBookmarkStore = create(
  persist(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (movie) =>
        set((state) => ({
          bookmarks: [...state.bookmarks, movie],
        })),
      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((m) => m.id !== id),
        })),
      isBookmarked: (id) =>
        get().bookmarks.some((m) => m.id === id),
    }),
    {
      name: 'bookmark-storage', 
      getStorage: () => localStorage, 
    }
  )
);