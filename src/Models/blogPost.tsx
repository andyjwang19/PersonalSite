export interface blogPost {
    postId: number;
    associatedProjectId?: number;
    body: string;
    postDate: string;
    highlight_score: number;
    visit_score: number;
    // tags
    // imgs
}
