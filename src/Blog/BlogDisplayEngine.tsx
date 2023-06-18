import { blogPost } from '../Models/blogPost';

interface blogDisplayProps {
    screenWidth: number;
    blogPosts: blogPost[];
}

const blockType = ['2x2', '1x4', '1x3', '1x2', '2x1'];
//blockType [0: 2x2, 1: 1x4, 2: 1x3, 3: 1x2,     4:2x1]
function assignAndBump(blogPosts: { type: number; name: string }[] /*blogPosts: blogPost[]*/) {
    /*
    // do this iteratively
    // result should be a set of {top left coordinate, blog, blockType}
    var currentRow = [0, 0, 0, 0];
    var nextRow = [0, 0, 0, 0];
    var lastBlock = -1;
    while (blogPosts.length !== 0) {
        while (currentRow.includes(0) && blogPosts.length !== 0) {
            var foundFit = 0;
            for (var i = 0; i < blogPosts.length; i++) {
                const currPost = blogPosts[i];
                if (currPost.type === lastBlock) {
                    continue;
                }
                const filled = fitsFlat(currPost, currentRow, nextRow);
                if (filled !== null) {
                    nextRow = filled.nextRow;
                    currentRow = filled.row;
                    lastBlock = currPost.type;
                    // del index i ?
                    blogPosts = blogPosts.slice(0, i).concat(blogPosts.slice(i + 1));
                    foundFit = 1;
                    break;
                }
            }
            if (foundFit === 0) {
                for (var i = 0; i < blogPosts.length; i++) {
                    const currPost = blogPosts[i];
                    if (currPost.type === lastBlock) {
                        continue;
                    }
                    const filled = fitsVert(currPost, currentRow, nextRow);
                    if (filled !== null) {
                        nextRow = filled.nextRow;
                        currentRow = filled.row;
                        lastBlock = currPost.type;
                        // del index i ?
                        blogPosts = blogPosts.slice(0, i).concat(blogPosts.slice(i + 1));
                        foundFit = 1;
                        break;
                    }
                }
            }
            if (foundFit === 0) {
                lastBlock = -1;
            }
        }
    }
    */
}
function fitsFlat(
    currPost: { type: number; name: string },
    currentRow: number[],
    nextRow: number[]
) {}
function fitsVert(
    currPost: { type: number; name: string },
    currentRow: number[],
    nextRow: number[]
) {}

export default function BlogDisplayEngine() {
    return assignAndBump([{ type: 1, name: 'A' }]);
}
