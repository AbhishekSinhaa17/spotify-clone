import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Library } from 'lucide-react'
import AlbumTable from './AlbumTable'
import AddAlbumDialog from './AddAlbumDialog'

const AlbumsTabContent = () => {
  return (
    <Card className='bg-zinc-800/50 border-x-zinc-700/50'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle className='flex items-center gap-2'>
              <Library className='h-5 w-5 text-violet-500'/>
              Albums Library
            </CardTitle>
            <CardDescription>Manage your album collection</CardDescription>
          </div>
          <AddAlbumDialog />
        </div>
      </CardHeader>

      <CardContent>
      <AlbumTable />
    </CardContent>
    </Card>

    
  )
}

export default AlbumsTabContent