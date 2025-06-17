import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart } from "lucide-react";

export default function InfinitelyWise() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "María",
      verse: "Filipenses 4:13",
      message: "Todo lo puedo en Cristo que me fortalece.",
      reactions: 4,
      prayers: 3,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handlePost = () => {
    if (!newMessage) return;
    const newPost = {
      id: posts.length + 1,
      user: "Tú",
      verse: "",
      message: newMessage,
      reactions: 0,
      prayers: 0,
    };
    setPosts([newPost, ...posts]);
    setNewMessage("");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">
        InfinitelyWise ✝️
      </h1>
      <div className="mb-6">
        <Input
          placeholder="Comparte un versículo, testimonio o palabra de ánimo..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button onClick={handlePost} className="mt-2 w-full">
          Publicar
        </Button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white shadow rounded-xl">
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">{post.user}</p>
              {post.verse && (
                <p className="text-xs text-blue-600 font-semibold">
                  {post.verse}
                </p>
              )}
              <p className="mt-2 text-lg">{post.message}</p>
              <div className="flex space-x-4 mt-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.reactions}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.prayers}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
