"use client"
import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  timestamp: Date;
}

interface CommentSectionProps {
  contract: any;
}

const CommentSection: React.FC<CommentSectionProps> = ({ contract }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        text: newComment,
        timestamp: new Date()
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };
  
  return (
    <div className=" mx-auto p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded-md"
          rows={3}
        />
        <button 
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-600 text-white  hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
      
      <div>
        <h3 className="mb-2">Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet</p>
        ) : (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="mb-2 p-2 bg-gray-100 rounded-md"
            >
              <p>{comment.text}</p>
              <small className="text-gray-500">
                {comment.timestamp.toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;