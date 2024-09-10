
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
  { songName: "Blinding Lights", artist: "The Weeknd", dateStreamed: "2023-06-15", streamCount: 1500, userId: "user123" },
  { songName: "Shape of You", artist: "Ed Sheeran", dateStreamed: "2023-06-14", streamCount: 1200, userId: "user456" },
  { songName: "Dance Monkey", artist: "Tones and I", dateStreamed: "2023-06-13", streamCount: 1000, userId: "user789" },
  { songName: "Watermelon Sugar", artist: "Harry Styles", dateStreamed: "2023-06-12", streamCount: 950, userId: "user101" },
  { songName: "Blinding Lights", artist: "The Weeknd", dateStreamed: "2023-06-11", streamCount: 900, userId: "user202" },
]

export default function Streamtable() {
  const [streams, setStreams] = useState<Stream[]>(initialStreams)
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