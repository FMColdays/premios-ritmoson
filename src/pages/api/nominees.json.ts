import type { APIRoute } from 'astro'
import votesInfo from '@data/editions-vote.json'

const DEFAULT_CATEGORY_PARAM = '1'
export const GET: APIRoute = async ({ request }) => {
  const { url } = request
  const searchParams = new URL(url).searchParams
  const category = Number(searchParams.get('category') ?? DEFAULT_CATEGORY_PARAM)

  const categoryInfo = votesInfo[category]

  return new Response(JSON.stringify(categoryInfo))
}
