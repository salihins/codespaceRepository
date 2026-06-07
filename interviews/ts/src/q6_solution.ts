//around 90 mins.
function findPath(n: number, flights: number[][], start: number, end: number): number[] {
    // 1. Build adjacency list
    const adj: number[][] = [];
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    for (let i = 0; i < flights.length; i++) {
        const from = flights[i][0];
        const to = flights[i][1];
        adj[from].push(to);
    }

    // 2. Iterative BFS
    // Queue stores the city we are visiting
    const queue: number[] = [start];
    
    // To reconstruct path, we track "where did we come from?"
    // parent[i] = x means we got to city i from city x
    const parent = new Map<number, number>();
    
    // Visited set to avoid cycles
    const visited = new Set<number>();
    visited.add(start);

    while (queue.length > 0) {
        // Dequeue
        const current = queue.shift()!;

        if (current === end) {
            // Found it! Reconstruct path
            const path: number[] = [];
            let trace: number | undefined = end;
            
            while (trace !== undefined) {
                path.unshift(trace);
                // Go back
                trace = parent.get(trace);
                if (trace === start) {
                    path.unshift(trace);
                    break;
                }
            }
            // Edge case: start == end
            if (path.length === 0 && start === end) return [start];
            
            return path;
        }

        const neighbors = adj[current];
        for (let i = 0; i < neighbors.length; i++) {
            const next = neighbors[i];
            if (!visited.has(next)) {
                visited.add(next);
                parent.set(next, current); // We got to 'next' from 'current'
                queue.push(next);
            }
        }
    }

    return [];
}
