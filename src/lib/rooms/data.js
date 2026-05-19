export const fetchRooms = async()=> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`)
  const data = res.json();
  return data || [];
}
export const fetchFeaturedRooms = async()=> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
  const data = res.json();
  return data || [];
}