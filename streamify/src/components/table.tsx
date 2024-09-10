
import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

type Stream = {
  songName: string
  artist: string
  dateStreamed: string
  streamCount: number
  userId: string
}

// Sample data
const initialStreams: Stream[] = [
  { songName: "Kesariya", artist: "Arijit Singh", dateStreamed: "2024-06-15", streamCount: 186, userId: "user123" },
  { songName: "My Dil Goes..", artist: "Shaan", dateStreamed: "2024-06-14", streamCount: 305, userId: "user456" },
  { songName: "Apna Bana Le", artist: "Arijit Singh", dateStreamed: "2024-06-13", streamCount: 237, userId: "user123" },
  { songName: "Banjara", artist: "Sukhwinder", dateStreamed: "2024-06-12", streamCount: 73, userId: "user101" },
  { songName: "Dus Bahane", artist: "K.K.", dateStreamed: "2024-06-11", streamCount: 209, userId: "user202" },
]

export default function Streamtable() {
  const streams = initialStreams
  const [sortConfig, setSortConfig] = useState<{ key: keyof Stream; direction: 'asc' | 'desc' } | null>(null)
  const [filterArtist, setFilterArtist] = useState("")
  const [filterSong, setFilterSong] = useState("")

  // Sorting function
  const sortData = (key: keyof Stream) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  // Apply sorting and filtering
  const sortedAndFilteredStreams = useMemo(() => {
    let result = [...streams]

    // Apply filters
    if (filterArtist) {
      result = result.filter(stream => 
        stream.artist.toLowerCase().includes(filterArtist.toLowerCase())
      )
    }
    if (filterSong) {
      result = result.filter(stream => 
        stream.songName.toLowerCase().includes(filterSong.toLowerCase())
      )
    }

    // Apply sorting
    if (sortConfig !== null) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      })
    }

    return result
  }, [streams, sortConfig, filterArtist, filterSong])

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Filter by artist"
          value={filterArtist}
          onChange={(e) => setFilterArtist(e.target.value)}
          className="max-w-sm"
        />
        <Input
          placeholder="Filter by song"
          value={filterSong}
          onChange={(e) => setFilterSong(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Song Name</TableHead>
            <TableHead>Artist</TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData('dateStreamed')}>
                Date Streamed
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData('streamCount')}>
                Stream Count
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>User ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedAndFilteredStreams.map((stream, index) => (
            <TableRow key={index}>
              <TableCell>{stream.songName}</TableCell>
              <TableCell>{stream.artist}</TableCell>
              <TableCell>{stream.dateStreamed}</TableCell>
              <TableCell>{stream.streamCount}</TableCell>
              <TableCell>{stream.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}