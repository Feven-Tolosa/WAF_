'use client'

import { useState } from 'react'

// Notification types
type NotificationType = 'security' | 'system' | 'update' | 'alert'

interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  timestamp: Date
  read: boolean
  priority: 'high' | 'medium' | 'low'
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'security',
      title: 'SQL Injection Attempt Blocked',
      message:
        'Blocked SQL injection attempt from IP 192.168.1.15 targeting login endpoint',
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
      read: false,
      priority: 'high',
    },
    {
      id: '2',
      type: 'alert',
      title: 'High Traffic Detected',
      message:
        'Unusual traffic spike detected. 500 requests in last minute from multiple IPs',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false,
      priority: 'high',
    },
    {
      id: '3',
      type: 'update',
      title: 'Rules Updated Successfully',
      message: 'New security rules have been deployed and are now active',
      timestamp: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
      read: true,
      priority: 'medium',
    },
    {
      id: '4',
      type: 'system',
      title: 'System Maintenance Scheduled',
      message: 'Planned maintenance window: Saturday 2:00 AM - 4:00 AM EAT',
      timestamp: new Date(Date.now() - 1000 * 60 * 360), // 6 hours ago
      read: true,
      priority: 'medium',
    },
    {
      id: '5',
      type: 'security',
      title: 'XSS Attack Prevented',
      message: 'Cross-site scripting attempt blocked on contact form',
      timestamp: new Date(Date.now() - 1000 * 60 * 720), // 12 hours ago
      read: true,
      priority: 'high',
    },
    {
      id: '6',
      type: 'system',
      title: 'Backup Completed',
      message: 'Nightly backup completed successfully. 5.2GB of data secured',
      timestamp: new Date(Date.now() - 1000 * 60 * 1440), // 24 hours ago
      read: true,
      priority: 'low',
    },
    {
      id: '7',
      type: 'update',
      title: 'New Features Available',
      message: 'Check out the new analytics dashboard and reporting features',
      timestamp: new Date(Date.now() - 1000 * 60 * 2880), // 48 hours ago
      read: true,
      priority: 'medium',
    },
    {
      id: '8',
      type: 'alert',
      title: 'Certificate Expiry Warning',
      message: 'SSL certificate for example.et expires in 15 days',
      timestamp: new Date(Date.now() - 1000 * 60 * 4320), // 72 hours ago
      read: true,
      priority: 'medium',
    },
  ])

  const [filter, setFilter] = useState<NotificationType | 'all'>('all')
  const [priorityFilter, setPriorityFilter] = useState<
    'all' | 'high' | 'medium' | 'low'
  >('all')

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    )
  }

  const clearAll = () => {
    setNotifications([])
  }

  const filteredNotifications = notifications.filter((notification) => {
    const typeMatch = filter === 'all' || notification.type === filter
    const priorityMatch =
      priorityFilter === 'all' || notification.priority === priorityFilter
    return typeMatch && priorityMatch
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case 'security':
        return 'fas fa-shield-alt'
      case 'system':
        return 'fas fa-cog'
      case 'update':
        return 'fas fa-sync'
      case 'alert':
        return 'fas fa-exclamation-triangle'
      default:
        return 'fas fa-bell'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-ethio-red'
      case 'medium':
        return 'text-ethio-yellow'
      case 'low':
        return 'text-ethio-green'
      default:
        return 'text-ethio-light'
    }
  }

  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  return (
    <div className='p-6 max-w-6xl mx-auto'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8'>
        <div>
          <h1 className='text-2xl font-bold text-ethio-yellow mb-2 flex items-center'>
            <i className='fas fa-bell mr-3'></i>
            Notifications
          </h1>
          <p className='text-ethio-light'>
            {unreadCount > 0
              ? `${unreadCount} unread notifications`
              : 'All caught up!'}
          </p>
        </div>
        <div className='flex space-x-2 mt-4 sm:mt-0'>
          <button
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className='px-4 py-2 bg-ethio-blue text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-ethio-blue/90'
          >
            Mark all as read
          </button>
          <button
            onClick={clearAll}
            className='px-4 py-2 bg-ethio-red text-white rounded-lg hover:bg-ethio-red/90'
          >
            Clear all
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className='ethio-card p-4 mb-6'>
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'>
          <div>
            <label className='block text-sm font-medium text-ethio-light mb-2'>
              Filter by type
            </label>
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as NotificationType | 'all')
              }
              className='w-full sm:w-48 p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
            >
              <option value='all'>All types</option>
              <option value='security'>Security</option>
              <option value='system'>System</option>
              <option value='update'>Updates</option>
              <option value='alert'>Alerts</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-ethio-light mb-2'>
              Filter by priority
            </label>
            {/* <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as any)}
              className='w-full sm:w-48 p-2 bg-ethio-dark/50 border border-ethio-yellow/20 rounded text-ethio-light'
            >
              <option value='all'>All priorities</option>
              <option value='high'>High</option>
              <option value='medium'>Medium</option>
              <option value='low'>Low</option>
            </select> */}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className='space-y-4'>
        {filteredNotifications.length === 0 ? (
          <div className='ethio-card p-8 text-center'>
            <i className='fas fa-inbox text-4xl text-ethio-yellow mb-4'></i>
            <h3 className='text-xl font-semibold text-ethio-light mb-2'>
              No notifications
            </h3>
            <p className='text-ethio-light'>
              You are all caught up! New notifications will appear here.
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`ethio-card p-4 transition-all duration-200 ${
                !notification.read ? 'border-l-4 border-ethio-yellow' : ''
              }`}
            >
              <div className='flex items-start'>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    notification.type === 'security'
                      ? 'bg-ethio-red/20'
                      : notification.type === 'alert'
                      ? 'bg-ethio-yellow/20'
                      : notification.type === 'update'
                      ? 'bg-ethio-blue/20'
                      : 'bg-ethio-green/20'
                  }`}
                >
                  <i
                    className={`${getNotificationIcon(notification.type)} ${
                      notification.type === 'security'
                        ? 'text-ethio-red'
                        : notification.type === 'alert'
                        ? 'text-ethio-yellow'
                        : notification.type === 'update'
                        ? 'text-ethio-blue'
                        : 'text-ethio-green'
                    }`}
                  ></i>
                </div>

                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h3 className='font-semibold text-ethio-light'>
                        {notification.title}
                      </h3>
                      <p className='text-ethio-light mt-1'>
                        {notification.message}
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                          notification.priority
                        )} ${
                          notification.priority === 'high'
                            ? 'bg-ethio-red/20'
                            : notification.priority === 'medium'
                            ? 'bg-ethio-yellow/20'
                            : 'bg-ethio-green/20'
                        }`}
                      >
                        {notification.priority}
                      </span>
                      <span className='text-xs text-ethio-light'>
                        {formatTime(notification.timestamp)}
                      </span>
                    </div>
                  </div>

                  <div className='flex space-x-2 mt-3'>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className='text-xs px-3 py-1 bg-ethio-blue/20 text-ethio-blue rounded hover:bg-ethio-blue/30'
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className='text-xs px-3 py-1 bg-ethio-red/20 text-ethio-red rounded hover:bg-ethio-red/30'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
        <div className='ethio-stat-card p-4 text-center'>
          <div className='text-2xl font-bold text-ethio-light'>
            {notifications.length}
          </div>
          <div className='text-sm text-ethio-light'>Total</div>
        </div>
        <div className='ethio-stat-card p-4 text-center'>
          <div className='text-2xl font-bold text-ethio-red'>
            {notifications.filter((n) => n.priority === 'high').length}
          </div>
          <div className='text-sm text-ethio-light'>High Priority</div>
        </div>
        <div className='ethio-stat-card p-4 text-center'>
          <div className='text-2xl font-bold text-ethio-yellow'>
            {notifications.filter((n) => n.priority === 'medium').length}
          </div>
          <div className='text-sm text-ethio-light'>Medium Priority</div>
        </div>
        <div className='ethio-stat-card p-4 text-center'>
          <div className='text-2xl font-bold text-ethio-green'>
            {notifications.filter((n) => n.priority === 'low').length}
          </div>
          <div className='text-sm text-ethio-light'>Low Priority</div>
        </div>
      </div>
    </div>
  )
}
