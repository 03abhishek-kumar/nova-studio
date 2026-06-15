import pool from '@/lib/db';

// Fetch all projects -- we'll use in portfolio section
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    );
    return Response.json(result.rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return Response.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// Add a new project -- (admin only)
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, category, image_url } = body;

    if (!title || !category || !image_url) {
      return Response.json(
        { error: 'title, category, and image_url are required' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO projects (title, category, image_url) VALUES ($1, $2, $3) RETURNING *',
      [title, category, image_url]
    );

    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return Response.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}