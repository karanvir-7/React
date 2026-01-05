import { User } from "../../shared/interface/user";

export const getInitialUser = (): User => {
    try {
        const raw = localStorage.getItem('user');
        if (raw) return JSON.parse(raw);
    } catch {}
    return {
        id: 0,
        bio: '',
        created_at: '',
        followers: 0,
        following: 0,
        location: '',
        login: '',
        name: '',
        public_repos: 0,
        avatar_url: '',
        firstName: '',
        lastName: '',
        createdAt: null,
        email: '',
    };
};